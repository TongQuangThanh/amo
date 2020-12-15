import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, Platform, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-register-to-receive-goods',
  templateUrl: './register-to-receive-goods.page.html',
  styleUrls: ['./register-to-receive-goods.page.scss'],
})
export class RegisterToReceiveGoodsPage implements OnInit {
  heightScreen: number;
  listDepartmentByID: any;
  listDepartment: any;
  receiverInfor: any;
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
  form_note: any;
  form_date_time: any;
  form_date_time_class: any;
  
  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private platform: Platform,
    private navCtrl: NavController,
    private apiService: ApiService,
    private translate: TranslateService,
    private alertService: AlertService
  ) { 
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
  }

  ngOnInit() {
    this.listDepartmentByID = {};
    this.receiverInfor = "";
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
    this.form_note = "";
    this.form_date_time = "";
    this.form_date_time_class = "";
    
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
        self.listDepartment = result.userApartments;
        self.listDepartment.forEach(data =>{
          self.listDepartmentByID[data.apartment._id] = data;
        });
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
  ionChangeDateTime(event){
    if (this.form_date_time != "") {
      this.form_date_time_class = 'has-input-value';
    } else {
      this.form_date_time_class = "";
    }
  }
  convertListImage() {
    var self = this;
    for(var i=0;i<self.list_image_select.length;i++){
      self.list_image.push({
        index:0, 
        src: self.list_image_select[i].media.url,
        media: self.list_image_select[i].media
      });
    }
    self.list_image_select = [];
    self.breakListImage();
  }

  eventButtonRegisterNew() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.form_apartment_id];
    let tip_value = 0;
    if (self.tip_value == 1) {
      tip_value = 10000;
    } else if (self.tip_value == 2) {
      tip_value = 20000;
    } else if (self.tip_value == 3) {
      tip_value = 30000;
    } else if (self.tip_value == 4) {
      tip_value = this.form_money_tip_value;
    }
    let list_attachment = [];
    self.list_image.forEach(image => {
      list_attachment.push(image.media);
    })
    const params = {
      // category: "",
      title: this.translate.instant('INBOX_29.title'),
      content: this.form_note,
      campaign: dataApartment.campaign._id,
      apartment: this.form_apartment_id,
      // createdBy: "",
      attachments: list_attachment,
      type: "receiver",
      receiverInfor: this.receiverInfor,
      receiverPaymentHelps: this.check_box_1 == false ? 'notPayment' : 'payment',
      receiverPaymentHelpsValue: this.check_box_1 == true ? this.form_money_payment : 0,
      receiverPaymentTip: this.check_box_2 == false ? 'notPayment' : 'payment',
      receiverPaymentTipValue: this.check_box_2 == true ? tip_value : 0,
      receiverDate: this.form_date_time
    };

    this.loading.present();
    this.apiService.addFeedbackNew(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
        self.navCtrl.back();
      },
      error => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
      }
    );
  }

  // select image
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: this.translate.instant('COMMON.form_select_image_title'),
      buttons: [{
        text: this.translate.instant('COMMON.form_select_image_library'),
        handler: () => {
          this.checkPicturePermission(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: this.translate.instant('COMMON.form_select_image_camera'),
        handler: () => {
          this.checkPicturePermission(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: this.translate.instant('COMMON.form_select_image_cancel'),
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  checkPicturePermission(sourceType : PictureSourceType) {
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
  checkActiveButton() {
    if (this.form_apartment_id == '' 
      || this.receiverInfor == ''
      || this.form_note == ''
      || this.form_date_time == ''
      || (this.check_box_1 == true && this.form_money_payment == '') 
      || (this.check_box_2 == true && this.tip_value == 4 && this.form_money_tip_value == '')
    ) {
      return 'button-inactive'
    } else {
      return "button-active";
    }
  }
}
