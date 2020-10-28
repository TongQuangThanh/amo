import { ModalController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, Input, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, NavParams, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-popup-complain',
  templateUrl: './popup-complain.page.html',
  styleUrls: ['./popup-complain.page.scss'],
})
export class PopupComplainPage implements OnInit {
  selectedLanguage:string;
  @ViewChild('content') content: any;

  data_chat: any;
  list_image_select: any;
  flag_user: any;

  defineHeightScreen:number;
  widthListScreen:number;
  listPaymentComment: any;
  paymentBillID:string;
  heightScreen:number;
  editorMsg:any;
  userID: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private platform: Platform,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private navParams: NavParams,
    private authService: AuthService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private alertService: AlertService,
    private route: ActivatedRoute) { 
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
      var self = this;
      platform.ready().then((readySource) => {
        self.widthListScreen = platform.width() * 0.8;
        self.heightScreen = platform.height() * 0.63;
        self.defineHeightScreen = this.heightScreen;
      });
      UtilsService.requestDetailComponentShare = this;
  }

  ngOnInit() {
    this.paymentBillID = this.navParams.data.id;
    this.flag_user = "";
    this.data_chat = [];
    this.editorMsg = "";
    this.list_image_select = [];
    const profile = this.authService.getProfile();
    if (profile && profile._id) {
      this.userID = profile._id;
    } else {
      this.userID = "";
    }
    this.getPaymentComment();
    
  }

  getPaymentComment() {
    this.loading.present();
    const self = this;
    this.apiService.getListPaymentComment(this.paymentBillID)
      .subscribe(result => {
        self.listPaymentComment = result.paymentComments;
        self.listPaymentComment.forEach(product => {
          let type = 'left';
          if (product.createdBy._id == self.userID) {
            type = 'right';
          }
          if (product.attachments.length > 0) {
            product.attachments.forEach(attachments => {
              let object = {
                type: type, 
                avatar: product.createdBy.avatar, 
                message: "", 
                images: attachments.url
              }
              self.data_chat.push(object);
            })
          } else {
            let object = {
              type: type, 
              avatar: product.createdBy.avatar, 
              message: product.content, 
              images: ""
            }
            self.data_chat.push(object);
          }
        });

        self.loading.dismiss();
        self.scrollToBottom();
    },
    error => {
      self.loading.dismiss();
    });
  }

  sendMsg(){
    this.loading.present();
    const self = this;
    const params = {
      content: this.editorMsg,
      attachments: [],
      bill: this.paymentBillID
    }
    this.apiService.sendPaymentComment(params)
      .subscribe(result => {
        self.data_chat.push(
          {type: 'right', avatar: "", message: self.editorMsg}
        )
        self.loading.dismiss();
        self.editorMsg = "";
        self.scrollToBottom();
    },
    error => {
      self.editorMsg = "";
      self.loading.dismiss();
    });
  }

  scrollToBottom() {
    var self = this;
    setTimeout(() => {
      if (self.content.scrollToBottom) {
        self.content.scrollToBottom();
      }
    }, 400)
  }

  getMarginTop(message) {
    if (this.flag_user != message.type) {
      this.flag_user = message.type;
      return 'margin-top-20';
    } else {
      return 'no-name';
    }
  }

  eventSendImage() {
    var self = this;
    let listAttachments = [];
    let data_chat_image = [];
    for(var i=0;i<self.list_image_select.length;i++){
      listAttachments.push(self.list_image_select[i].media);
      data_chat_image.push({
        type: 'right', avatar: "", message: "", images: self.list_image_select[i].media.url
      });
    }
    var param = {
      content: " ",
      bill: this.paymentBillID,
      attachments: listAttachments
    }
    if (listAttachments.length == 0) return;
    this.loading.present();
    this.apiService.sendPaymentComment(param)
      .subscribe(result => {
        self.data_chat = self.data_chat.concat(data_chat_image);
        self.list_image_select = [];
        self.scrollToBottom();
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast('Send image fail');
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
        self.list_image_select = [];
        self.list_image_select.push(result);
        self.eventSendImage();
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









  closeModal() {
    this.modalController.dismiss();
  }
}
