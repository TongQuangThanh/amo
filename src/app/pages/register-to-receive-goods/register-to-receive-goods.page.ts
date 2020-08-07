import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, Platform, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register-to-receive-goods',
  templateUrl: './register-to-receive-goods.page.html',
  styleUrls: ['./register-to-receive-goods.page.scss'],
})
export class RegisterToReceiveGoodsPage implements OnInit {
  heightScreen: number;
  listDepartment: any;
  check_box_1: boolean;
  check_box_2: boolean;
  tip_value: any;
  show_popup_tip: any;
  form_apartment_id:any;
  form_apartment_class:any;
  form_money_tip_value: any;
  form_money_tip: any;
  form_money_tip_class: any;
  form_money_payment: any;
  form_money_payment_class: any;
  list_image_select: any[] = [];
  list_image: any;
  list_image_1: any;
  number_of_image: any;
  flag_show_all_image: any;
  
  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private platform: Platform,
    private navCtrl: NavController,
    private apiService: ApiService
  ) { 
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
  }

  ngOnInit() {
    this.getListApartment();
    this.check_box_1 = false;
    this.check_box_2 = false;
    this.tip_value = 1;
    this.show_popup_tip = false;
    this.form_apartment_id = "";
    this.form_apartment_class = "";
    this.form_money_payment = "";
    this.form_money_payment_class = "";
    this.form_money_tip = "";
    this.form_money_tip_value = "";
    this.form_money_tip_class = "";
    this.list_image = [];
    this.flag_show_all_image = false;
    this.breakListImage();
  }
  breakListImage() {
    var self = this; 
    var index = 0;
    this.list_image_1 = [];
    this.number_of_image = self.list_image.length;
    for(var i = 0; i < self.number_of_image; i++) {
      self.list_image[i].index = index;
      index++;
      if (index < 5) {
        self.list_image_1.push(
          self.list_image[i]
        );
      }
    }
  }
  deleteImageToList(index) {
    var self = this;
    this.list_image.forEach(element => {
      if (element.index == index) {
        console.log(element);
        self.list_image.splice(index, 1);
      }
    });
    this.breakListImage();
  }
  showAllImage() {
    this.flag_show_all_image = true;
  }
  eventButtonClosePopupImage() {
    this.flag_show_all_image = false;
  }
  ionChangePulldown1(event){
    if (this.form_apartment_id != '') {
      this.form_apartment_class = 'has-input-value';
    } else {
      this.form_apartment_class = '';
    }
  }
  ionchangTextBoxPayment1() {
    if (this.form_money_payment != '') {
      this.form_money_payment_class = 'has-input-value';
    } else {
      this.form_money_payment_class = '';
    }
  }
  ionchangTextBoxTip1() {
    if (this.form_money_tip != '') {
      this.form_money_tip_class = 'has-input-value';
    } else {
      this.form_money_tip_class = '';
    }
  }

  getListApartment(){
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        console.log(result.userApartments);
        self.listDepartment = result.userApartments;
        self.loading.dismiss()
    },
    error => { 
      self.loading.dismiss();
    });
  }
  ionChangeCheckBox1(){
    this.check_box_1 = !this.check_box_1;
  }
  ionChangeCheckBox2(){
    this.check_box_2 = !this.check_box_2;
  }
  selectTip(value) {
    this.tip_value = value;
  }
  presentModal(value) {
    this.tip_value = value;
    this.show_popup_tip = true;
  }
  eventButtonClosePopup(){
    this.show_popup_tip = false;
  }
  eventButtonSavePopup(){
    this.show_popup_tip = false;
    this.form_money_tip_value = this.form_money_tip;
  }
  convertListImage() {
    var self = this;
    for(var i=0;i<self.list_image_select.length;i++){
      self.list_image.push(
        {index:0, src: self.list_image_select[i].media.url}
      );
    }
    self.list_image_select = [];
    self.breakListImage();
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
      console.log(imageData);
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
        console.log(result);
        self.list_image_select.push(result);
        self.convertListImage();
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
