import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AlertService } from '../../services/alert/alert.service';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.page.html',
  styleUrls: ['./add-request.page.scss'],
})
export class AddRequestPage implements OnInit {
  croppedImagepath = "";
  departmentID:string;
  listDepartment: any;
  topicID:string;
  listTopic: any;
  title:string;
  message:string;
  widthListScreen:number;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver: boolean = false;

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private navCtrl: NavController,
    private apiService: ApiService,
    private loading: LoadingService,
    private authService: AuthService,
    private alertService: AlertService) { 
    
  }

  ngOnInit() {
    this.getUserApar();
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
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  changeValueDepartment(event){
    this.getFeedbackCategory(event.detail.value);
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
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

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }

  addRequest(event){
    const params = {
      category: this.topicID,
      title: this.title,
      content: this.message,
      attachments: [],
      apartment: this.departmentID
    };
    this.loading.present();
    const self = this;
    this.apiService.addFeedback(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.alertService.presentToast("add request success");
        self.navCtrl.back();
    },
    error => {
      self.loading.dismiss();
    });
  }

}