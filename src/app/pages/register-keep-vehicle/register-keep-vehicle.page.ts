import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-register-keep-vehicle',
  templateUrl: './register-keep-vehicle.page.html',
  styleUrls: ['./register-keep-vehicle.page.scss'],
})
export class RegisterKeepVehiclePage implements OnInit {
  listDepartment: any;
  listDepartmentByID: any;
  form_apartment_id:any;
  form_apartment_class:any;
  form_fullname: any;
  form_fullname_class: any;
  form_vehicle_id:any;
  form_vehicle_class:any;
  form_hang_xe: any;
  form_hang_xe_class: any;
  form_model: any;
  form_model_class: any;
  form_bien_kiem_soat: any;
  form_bien_kiem_soat_class: any;
  form_date_time: any;
  form_date_time_class: any;
  tab2_form_apartment_id:any;
  tab2_form_apartment_class:any;
  list_image_select: any[] = [];
  image_select_url_1: any;
  image_select_url_2: any;
  list_vehicle:any;
  form_note: any;
  form_note_tab2: any;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private translate: TranslateService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getListApartment();
    this.tab2_form_apartment_id = "";
    this.tab2_form_apartment_class = "";
    this.form_apartment_id = "";
    this.form_apartment_class = "";
    this.form_fullname = "";
    this.form_fullname_class = "";
    this.form_vehicle_id = "";
    this.form_vehicle_class = "";
    this.form_hang_xe = "";
    this.form_hang_xe_class = "";
    this.form_model = "";
    this.form_model_class = "";
    this.form_bien_kiem_soat = "";
    this.form_bien_kiem_soat_class = "";
    this.form_date_time = "";
    this.form_date_time_class = "";
    this.list_vehicle = [];
    this.image_select_url_1 = "";
    this.image_select_url_2 = "";
    this.listDepartmentByID = {};
    this.form_note = "";
    this.form_note_tab2 = "";
  }
  getListApartment(){
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        console.log(result.userApartments);
        self.listDepartment = result.userApartments;
        self.listDepartment.forEach(data =>{
          self.listDepartmentByID[data.apartment ._id] = data;
        })
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  eventButtonRegisterNew() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.form_apartment_id];
    const params = {
      // category: "",
      title: this.translate.instant('INBOX_31.title'),
      content: this.form_note,
      campaign: dataApartment.campaign._id,
      apartment: this.form_apartment_id,
      // createdBy: "",
      attachments: [],
      type: "parking",
      parkingFullName: this.form_fullname,
      parkingType: this.form_vehicle_id,
      parkingModel: this.form_model,
      parkingBrand: this.form_hang_xe,
      parkingLicense: this.form_bien_kiem_soat,
      parkingDate: this.form_date_time,
      parkingIdentityImageFront: this.image_select_url_1,
      parkingIdentityImageBack: this.image_select_url_2,
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
      }
    );
  }

  eventButtonRemoveVehicles() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.tab2_form_apartment_id];
    let count = 0;
    this.list_vehicle.forEach(data => {
      if(data.checkbox == true) {
        count++;
      }
    });
    this.list_vehicle.forEach(data => {
      if(data.checkbox == true) {
        const params = {
          // category: "",
          title: this.translate.instant('INBOX_31.title_tabs_cancel_registration'),
          content: this.form_note_tab2,
          campaign: dataApartment.campaign._id,
          apartment: this.tab2_form_apartment_id,
          // createdBy: "",
          attachments: [],
          type: "cancel",
          cancelType: data.vehicles.type,
          cancelModel: data.vehicles.model,
          cancelIdentity: data.vehicles.identity
    
        };
        this.loading.present();
        this.apiService.addFeedback(params)
          .subscribe(result => {
            count--;
            if (count == 0) {
              self.loading.dismiss();
            }
            self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
            self.navCtrl.back();
          },
          error => {
            count--;
            if (count == 0) {
              self.loading.dismiss();
            }
            self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
          }
        );
      }
    });
  }

  ionChangePulldown1(event){
    if (this.form_apartment_id != "") {
      this.form_apartment_class = 'has-input-value';
    } else {
      this.form_apartment_class = "";
    }
  }
  ionChangePulldown2(event){
    if (this.form_vehicle_id != "") {
      this.form_vehicle_class = 'has-input-value';
    } else {
      this.form_vehicle_class = "";
    }
  }
  ionChangeDateTime(event){
    if (this.form_date_time != "") {
      this.form_date_time_class = 'has-input-value';
    } else {
      this.form_date_time_class = "";
    }
  }
  ionChangeTextBox1() {
    if (this.form_fullname != '') {
      this.form_fullname_class = 'has-input-value';
    } else {
      this.form_fullname_class = '';
    }
  }
  ionChangeTextBox2() {
    if (this.form_hang_xe != '') {
      this.form_hang_xe_class = 'has-input-value';
    } else {
      this.form_hang_xe_class = '';
    }
  }
  ionChangeTextBox3() {
    if (this.form_model != '') {
      this.form_model_class = 'has-input-value';
    } else {
      this.form_model_class = '';
    }
  }
  ionChangeTextBox4() {
    if (this.form_bien_kiem_soat != '') {
      this.form_bien_kiem_soat_class = 'has-input-value';
    } else {
      this.form_bien_kiem_soat_class = '';
    }
  }
  tab2_ionChangePulldown1(event){
    var self = this;
    if (this.tab2_form_apartment_id != "") {
      this.tab2_form_apartment_class = 'has-input-value';
      let dataApartment = self.listDepartmentByID[this.tab2_form_apartment_id];
      self.list_vehicle = [];
      dataApartment.apartment.vehicles.forEach(vehicles => {
        let phuongtien = '';
        if (vehicles.type == 'car') {
          phuongtien = self.translate.instant('INBOX_31.vehicle_option_car');
        } else if (vehicles.type == 'motorbike') {
          phuongtien = self.translate.instant('INBOX_31.vehicle_option_motobike');
        } else if (vehicles.type == 'bike') {
          phuongtien = self.translate.instant('INBOX_31.vehicle_option_bike');
        } else {
          phuongtien = self.translate.instant('INBOX_31.vehicle_option_orther');
        }
        let object = {
          _id: vehicles._id,
          phuongtien: phuongtien, 
          hang_xe: '', 
          model: vehicles.model, 
          bien_so: vehicles.identity,
          checkbox: false,
          vehicles: vehicles
        };
        self.list_vehicle.push(object);
      });
    } else {
      this.tab2_form_apartment_class = "";
    }
  }
  ionChangeCheckBox(_id) {
    this.list_vehicle.forEach(data => {
      if (data._id == _id) {
        data.checkbox = !data.checkbox;
      }
    })
  }

  convertListImage(_index) {
    var self = this;
    if (self.list_image_select.length > 0) {
      if (_index == 1) {
        this.image_select_url_1 = self.list_image_select[0].media.url;
      }
      if (_index == 2) {
        this.image_select_url_2 = self.list_image_select[0].media.url;
      }
    }
  }

  // select image
  async selectImage(_index) {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.checkPicturePermission(this.camera.PictureSourceType.PHOTOLIBRARY, _index);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.checkPicturePermission(this.camera.PictureSourceType.CAMERA, _index);
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

  checkPicturePermission(sourceType : PictureSourceType, _index) {
    this.pickImage(sourceType, _index);
  }

  pickImage(sourceType, _index) {
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
        self.convertListImage(_index);
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
  deleteImageForm (_index) {
    if (_index == 1) {
      this.image_select_url_1 = "";
    }
    if (_index == 2) {
      this.image_select_url_2 = "";
    }
  }
  checkActiveButton() {
    let count = 0;
    this.list_vehicle.forEach(data => {
      if(data.checkbox == true) {
        count++;
      }
    });
    if (this.tab2_form_apartment_id == '' 
      || count == 0
      || this.form_note_tab2 == ''
    ) {
      return 'button-inactive'
    } else {
      return "button-active";
    }
  }
}
