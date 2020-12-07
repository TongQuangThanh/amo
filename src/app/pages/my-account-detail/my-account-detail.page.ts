import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../translate-config.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ConstService } from '../../utils/const.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-my-account-detail',
  templateUrl: './my-account-detail.page.html',
  styleUrls: ['./my-account-detail.page.scss'],
})
export class MyAccountDetailPage implements OnInit {
  selectedLanguage:string;
  avatar:any;
  displayName: string;
  email: string;
  timeOrder: any;
  gender:any;
  nationality: any;
  dateOfBirth: any;
  personalLiscence: any;
  // listCountries:any;
  userName: string;
  phone: string;
  male: string;
  female: string;
  listCountry: any;
  avatarCountry: any;
  countryAlpha2: any;
  formPhoneCode: any = 84;
  list_image_select: any[] = [];
  isChangeAvatar: boolean = false;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService,
    private alertService: AlertService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
  ) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  
  ngOnInit() {
    this.getUserProfile();
    this.listCountry = ConstService.LIST_COUNTRIES;
    this.countryAlpha2 = "vn";
    this.avatarCountry = "https://lipis.github.io/flag-icon-css/flags/4x3/vn.svg";
  }

  getUserProfile(){
    var self = this;
    this.loading.present();
    this.apiService.getUserProfile()
      .subscribe(result => {
        self.displayName = result.profile.displayName;
        self.email = result.profile.email;
        self.phone = result.profile.phone;
        self.gender = result.profile.gender;
        self.nationality = result.profile.nationality;
        self.dateOfBirth = result.profile.dateOfBirth;
        self.personalLiscence = result.profile.personalLiscence;
        self.avatar = result.profile.avatar != null ? result.profile.avatar : '../assets/icon/avatar-red.svg';
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  addHomeMember(){
    this.navCtrl.navigateForward('/add-home-member');
  }

  updateAccount(){
    var self = this;
    const params = {
      email: self.email,
      displayName: self.displayName,
      phone: self.phone,
      gender: self.gender,
      dateOfBirth: self.dateOfBirth,
      personalLiscence: self.personalLiscence
    };
    this.loading.present();
    this.apiService.updateUserProfile(params)
      .subscribe(result => {
        localStorage.setItem('profile', JSON.stringify(result.profile));
        if (self.isChangeAvatar) {
          self.updateAvatar();
        } else {
          self.loading.dismiss()
          self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_sucess'));
        }
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_fail'));
    });
  }

  updateAvatar() {
    var self = this;
    const params = {
      avatar: self.avatar
    };
    this.apiService.postUpdateAvatar(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_sucess'));
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_fail'));
    });
  }

  onChangeCountry() {
    this.listCountry.forEach(country => {
      if (country.alpha2 == this.countryAlpha2) {
        this.formPhoneCode = country.phoneCode;
        this.avatarCountry = "https://lipis.github.io/flag-icon-css/flags/4x3/"+country.alpha2.toLowerCase()+".svg";
      }
    });
  }


   // select image
   async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.checkPicturePermission(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.checkPicturePermission(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  checkPicturePermission(sourceType : PictureSourceType) {
    this.pickImage(sourceType);
  }

  pickImage(sourceType) {
    var self = this;
    const options: CameraOptions = {
      quality: 80,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 800,
      targetHeight: 800,
    }
    
    this.camera.getPicture(options).then((imageData) => {
      const base64 = 'data:image/png;base64,';
      const date = new Date().valueOf();
      const imageName = date+ '.png';
      var binaryBlob = this.convertBase64ToBlob(base64+imageData)
      //var binaryBlob = atob(imageData);
      //const imageFile = new File([binaryBlob], imageName, { type: 'image/png' });
      const payload = new FormData();
      payload.append('media', binaryBlob, imageName);
      
      this.apiService.uploadImage(payload)
      .subscribe(result => {
        if (result) {
          self.isChangeAvatar = true;
          self.avatar = result.media.url
        }
      },
        error => {
      });
    }, (err) => {
      // Handle error
      // alert(err);
    });
  }

  private convertBase64ToBlob(base64: string) {
    const info = this.getInfoFromBase64(base64);
    const sliceSize = 512;
    const byteCharacters = window.atob(info.rawBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: info.mime });
  }

  private getInfoFromBase64(base64: string) {
    const meta = base64.split(',')[0];
    const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
    const mime = /:([^;]+);/.exec(meta)[1];
    const extension = /\/([^;]+);/.exec(meta)[1];

    return {
      mime,
      extension,
      meta,
      rawBase64
    };
  }
}
