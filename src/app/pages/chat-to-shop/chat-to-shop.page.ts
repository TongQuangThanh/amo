import { Component, OnInit, ViewChild  } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, IonContent  } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-to-shop',
  templateUrl: './chat-to-shop.page.html',
  styleUrls: ['./chat-to-shop.page.scss'],
})
export class ChatToShopPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  data_history: any;
  data_chat: any;
  message_content: any;
  list_image_select: any;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.data_history = {
      id: "1",
      status: "1",
      text_rate: "4.5",
      title: "Điện tử, điện lạnh - Sửa chữa bảo dưỡng điều hòa",
      money: "75.000 đ",
      avatar: "../assets/images/services/6.png",
      distributor: "Rada Việt Nam",
      name: "Nguyễn Doãn Vũ",
      role: "CEO",
      code_orders: "68686",
      date_time: "21/07/2020 - 02:14",
    }
    this.data_chat = [
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "Chào ban, chúng tôi có thể giúp gì được cho bạn", images: ""},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "Chào ban, chúng tôi có thể giúp gì được cho bạn", images: ""},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "Chào ban, chúng tôi có thể giúp gì được cho bạn", images: ""},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "Chào ban, chúng tôi có thể giúp gì được cho bạn", images: ""},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "Chào ban, chúng tôi có thể giúp gì được cho bạn", images: ""},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "Chào ban, chúng tôi có thể giúp gì được cho bạn", images: ""},
      {type: 'left', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"},
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: "", images: "../assets/images/services/9.jpg"},
    ]
    this.message_content = "";
    this.list_image_select = [];
  }
  ionViewWillEnter(){
    this.content.scrollToBottom(0);
  }
  getListApartment(){
    
  }
  eventButtonSendMessage() {
    var self = this;
    this.data_chat.push(
      {type: 'right', avatar: "../assets/images/services/9.jpg", message: self.message_content}
    )
    this.content.scrollToBottom(1000);
    self.message_content = "";
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
