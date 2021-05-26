import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-register-for-shipping',
  templateUrl: './register-for-shipping.page.html',
  styleUrls: ['./register-for-shipping.page.scss'],
})
export class RegisterForShippingPage implements OnInit {
  listDepartment: any;
  listDepartmentByID: any;
  check_box_1: boolean;
  check_box_2: boolean;
  tip_value: any;
  show_popup_tip: any;
  button_active: any;
  button_1_class: any;
  button_2_class: any;
  form_apartment_id: any;
  form_apartment_class: any;
  form_start_time: any;
  form_start_time_class: any;
  form_end_time: any;
  form_end_time_class: any;
  list_product: any;
  form_note: any;
  // image dialog
  flag_show_all_image = false;
  list_image_select = [];
  list_image = [];
  list_image_1 = [];
  number_of_image = 0;

  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private datePipe: DatePipe,
    private translate: TranslateService,
    private alertService: AlertService,
    public actionSheetController: ActionSheetController,
    private camera: Camera
  ) {}

  ngOnInit() {
    this.listDepartmentByID = {};
    this.getListApartment();
    this.button_active = 1;
    this.check_class_button();
    this.form_apartment_id = '';
    this.form_apartment_class = '';
    this.form_start_time = '';
    this.form_start_time_class = '';
    this.form_end_time = '';
    this.form_end_time_class = '';
    this.form_note = '';
    this.list_product = [
      { index: 1, name_product: '', number_of_product: 0, class: '' },
      { index: 2, name_product: '', number_of_product: 0, class: '' },
    ];
  }
  check_class_button() {
    if (this.button_active == 1) {
      this.button_1_class = 'button-active';
      this.button_2_class = 'button-unactive';
    } else {
      this.button_2_class = 'button-active';
      this.button_1_class = 'button-unactive';
    }
  }
  ionChangePulldown1(event) {
    if (this.form_apartment_id != '') {
      this.form_apartment_class = 'has-input-value';
    } else {
      this.form_apartment_class = '';
    }
  }
  ionChangeStartTime() {
    if (this.form_start_time != '') {
      this.form_start_time_class = 'has-input-value';
    } else {
      this.form_start_time_class = '';
    }
    // var date = new Date(this.form_start_time);
    // this.form_start_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
  }
  ionChangeEndTime() {
    if (this.form_end_time != '') {
      this.form_end_time_class = 'has-input-value';
    } else {
      this.form_end_time_class = '';
    }
    // var date = new Date(this.form_end_time);
    // this.form_end_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
  }
  getListApartment() {
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment().subscribe(
      (result) => {
        self.listDepartment = result.userApartments;
        self.listDepartment.forEach((data, index) => {
          if(index == 0) {
            this.form_apartment_id = data.apartment._id;
            this.form_apartment_class = 'has-input-value';
          }
          self.listDepartmentByID[data.apartment._id] = data;
        });
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }
  eventButton1(value) {
    this.button_active = value;
    this.check_class_button();
  }
  addProduct() {
    var self = this;
    self.list_product.push({ index: self.list_product.length + 1, name_product: '', number_of_product: 0, class: '' });
  }
  downNumberProduct(index) {
    var self = this;
    self.list_product.forEach((product) => {
      if (product.index == index && product.number_of_product > 0) {
        product.number_of_product--;
      }
    });
  }
  upNumberProduct(index) {
    var self = this;
    self.list_product.forEach((product) => {
      if (product.index == index && product.number_of_product < 10000) {
        product.number_of_product++;
      }
    });
  }
  ionchangGroup1TextBox() {
    var self = this;
    self.list_product.forEach((product) => {
      if (product.name_product != '') {
        product.class = 'has-input-value';
      } else {
        product.class = '';
      }
    });
  }
  eventButtonRegisterNew() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.form_apartment_id];
    let transferGoods = [];
    self.list_product.forEach((product) => {
      if (product.number_of_product > 0) {
        transferGoods.push({
          name: product.name_product,
          number: product.number_of_product,
        });
      }
    });
    let list_attachment = [];
    self.list_image.forEach((image) => {
      list_attachment.push(image.media);
    });
    const params = {
      // category: "",
      title: this.translate.instant('INBOX_24.title'),
      content: this.form_note,
      campaign: dataApartment.campaign._id,
      apartment: this.form_apartment_id,
      // createdBy: "",
      attachments: list_attachment,
      type: 'transfer',
      transferType: this.button_active == 1 ? 'income' : 'outcome',
      transferDateStart: this.form_start_time,
      transferDateEnd: this.form_start_time,
      transferGoods: transferGoods,
    };

    this.loading.present();
    this.apiService.addFeedbackNew(params).subscribe(
      (result) => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
        self.navCtrl.back();
      },
      (error) => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
      }
    );
  }
  checkActiveButton() {
    var self = this;
    // let is_input_product = false;
    // self.list_product.forEach((product) => {
    //   if (product.name_product != '' && product.number_of_product > 0) {
    //     is_input_product = true;
    //   }
    // });
    if (
      this.form_apartment_id == '' ||
      this.form_start_time == '' ||
      // || this.form_end_time == ''
      this.form_note == ''
      //  || is_input_product == false
    ) {
      return 'button-inactive';
    } else {
      return 'button-active';
    }
  }
  // image
  breakListImage() {
    var self = this;
    var index = 0;
    this.list_image_1 = [];
    this.number_of_image = self.list_image.length;
    for (var i = 0; i < self.number_of_image; i++) {
      self.list_image[i].index = index;
      index++;
      if (index < 5) {
        self.list_image_1.push(self.list_image[i]);
      }
    }
  }
  deleteImageToList(index) {
    var self = this;
    this.list_image.forEach((element) => {
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

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: this.translate.instant('COMMON.form_select_image_title'),
      buttons: [
        {
          text: this.translate.instant('COMMON.form_select_image_library'),
          handler: () => {
            this.checkPicturePermission(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: this.translate.instant('COMMON.form_select_image_camera'),
          handler: () => {
            this.checkPicturePermission(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: this.translate.instant('COMMON.form_select_image_cancel'),
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  checkPicturePermission(sourceType: PictureSourceType) {
    this.pickImage(sourceType);
  }

  blobToFile = (theBlob: Blob, fileName: string): any => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return theBlob;
  };

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
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        const base64Define = 'data:image/jpeg;base64,';
        var binaryBlob = this.convertBase64ToBlob(base64Define + imageData);
        const date = new Date().valueOf();
        const formData = new FormData();
        var fileName = 'amoapp' + date + '.jpg';
        var myFile = self.blobToFile(binaryBlob, fileName);
        const payload = new FormData();
        payload.append('media', binaryBlob, fileName);
        this.loading.present();
        this.apiService.uploadImage(payload).subscribe(
          (result) => {
            self.loading.dismiss();
            self.list_image_select.push(result);
            self.convertListImage();
          },
          (error) => {
            self.loading.dismiss();
          }
        );
      },
      (err) => {}
    );
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
      rawBase64,
    };
  }
  private convertListImage() {
    var self = this;
    for (var i = 0; i < self.list_image_select.length; i++) {
      self.list_image.push({
        index: 0,
        src: self.list_image_select[i].media.url,
        media: self.list_image_select[i].media,
      });
    }
    self.list_image_select = [];
    self.breakListImage();
  }
}
