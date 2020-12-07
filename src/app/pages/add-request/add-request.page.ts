import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
// import { File, IWriteOptions, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, Platform, NavController, ModalController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
// import { Diagnostic } from '@ionic-native/diagnostic/ngx';

import { PopupSelectApartmentPage } from '../popup-select-apartment/popup-select-apartment.page';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.page.html',
  styleUrls: ['./add-request.page.scss'],
})
export class AddRequestPage implements OnInit {
  croppedImagepath = "";
  departmentID: string;
  departmentName: string = "";
  listDepartment: any;
  userName: string;
  listTopic: any;
  title: string;
  message: string;
  widthListScreen: number;
  listImage: any[] = [];
  number_of_image: any;
  list_image: any;
  list_image_1: any;
  flag_show_all_image: any;

  isErrorUserName: boolean = false;
  isErrorTitle: boolean = false;
  isErrorMessage: boolean = false;
  isErrorDepartmentID: boolean = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  hasBaseDropZoneOver: boolean = false;
  constructor(
    public modalController: ModalController,
    private translate: TranslateService,
    private camera: Camera,
    private platform: Platform,
    // private diagnostic: Diagnostic,
    public actionSheetController: ActionSheetController,
    // private file: File,
    private navCtrl: NavController,
    private apiService: ApiService,
    private loading: LoadingService,
    private authService: AuthService,
    private alertService: AlertService) {
      platform.ready().then((readySource) => {
        this.widthListScreen = platform.width() * 0.8;
      });
  }

  ngOnInit() {
    this.getUserApar();
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

  getFeedbackCategory(apartmentID: string) {
    var self = this;
    this.loading.present();
    this.apiService.getFeedbackCategory(apartmentID)
      .subscribe(result => {
        self.listTopic = result.feedbackCategories;
        self.loading.dismiss();
      },
        error => {
          self.loading.dismiss();
        });
  }

  getUserApar() {
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        self.listDepartment = result.userApartments;
        if(self.listDepartment.length > 0){
          self.departmentID = self.listDepartment[0].apartment._id;
          self.departmentName = self.listDepartment[0].apartment.title + " - " + self.listDepartment[0].campaign.title;
        }
        self.loading.dismiss();
      },
        error => {
          self.loading.dismiss();
        });
  }

  changeValueDepartment(event) {
    this.getFeedbackCategory(event.detail.value);
  }

  // readFile(file: any) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const imgBlob = new Blob([reader.result], {
  //       type: file.type
  //     });
  //     const formData = new FormData();
  //     formData.append("media", imgBlob);
  //     console.log("build from data");
  //     this.apiService.uploadImage(formData)
  //     .subscribe(result => {
  //       console.log(result);
  //     },
  //       error => {
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
     }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
   return blob;
  }

  // openCameraGallary(type) {
  //   //this.loading.autoHide(1000);

  //   let source = this.camera.PictureSourceType.CAMERA;
  //   if (type == 'gallery')
  //     source = this.camera.PictureSourceType.PHOTOLIBRARY;

  //   const options: CameraOptions = {
  //     quality: 100,
  //     sourceType: source,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     allowEdit: true,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   }

  //   this.platform.ready().then(() => {
  //     this.camera.getPicture(options).then((imageData) => {

  //       this.picture = 'data:image/jpeg;base64,' + imageData;
  //     }, (err) => { });
  //   });
  // }

  checkPicturePermission(sourceType : PictureSourceType)
  {
    this.pickImage(sourceType);
  }

  blobToFile = (theBlob: Blob, fileName:string): any => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return theBlob;
  }

  pickImage(sourceType) {
    var self = this;
    const options: CameraOptions = {
      quality: 80,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 800,
      targetHeight: 800,
      correctOrientation: true,
    }
    
    this.camera.getPicture(options).then((imageData) => {
      const base64Define = 'data:image/jpeg;base64,';
      var binaryBlob = this.convertBase64ToBlob(base64Define+imageData);
      const date = new Date().valueOf();
      const formData = new FormData();
      var fileName = "amoapp" + date + ".jpg";
      var myFile = self.blobToFile(binaryBlob, fileName);
      const payload = new FormData();
      payload.append('media', binaryBlob, fileName);
      
      this.apiService.uploadImage(payload)
      .subscribe(result => {
        console.log(result);
        self.listImage.push(result);
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

  removeImageAttachment(event) {
    for(var i=0;i<this.listImage.length;i++){
      if(this.listImage[i].media._id == event.currentTarget.id){
        this.listImage.splice(i, 1);
      }
    }
  }

  checkActiveButton() {
    var self = this;
    if (this.userName && this.userName.length > 0) {
      this.isErrorUserName = false;
    } else {
      this.isErrorUserName = true;
    }

    if (this.title && this.title.length > 0) {
      this.isErrorTitle = false;
    } else {
      this.isErrorTitle = true;
    }

    if (this.message && this.message.length > 0) {
      this.isErrorMessage = false;
    } else {
      this.isErrorMessage = true;
    }

    if (this.departmentID && this.departmentID.length > 0) {
      this.isErrorDepartmentID = false;
    } else {
      this.isErrorDepartmentID = true;
    }

    if (this.isErrorMessage || this.isErrorUserName || this.isErrorTitle || this.isErrorDepartmentID) {
      return false;
    } else {
      return true;
    }
  }

  pushRequestToServer() {
    var self = this;
    var listAttachmentID = [];
    for(var i=0;i<this.listImage.length;i++){
      listAttachmentID.push(this.listImage[i].media._id)
    }
    const params = {
      // category: "",
      title: this.title,
      content: this.message,
      attachments: listAttachmentID,
      apartment: this.departmentID
    };
    this.loading.present();
    this.apiService.addFeedback(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
        self.navCtrl.back();
      },
        error => {
          self.loading.dismiss();
          self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
        });
  }

  async selectApartmentModal() {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupSelectApartmentPage,
      componentProps: {
        idApartment: self.departmentID
      },
      cssClass: 'popupSelectApartment-page-custom'
    });
    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned && dataReturned.data) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        this.departmentID = dataReturnedResult.id;
        this.departmentName = dataReturnedResult.name;
        // self.formRelationship = dataReturnedResult.value;
        // self.formRelationshipName = dataReturnedResult.name;
      }
    });
    return await modal.present();
  }
}
