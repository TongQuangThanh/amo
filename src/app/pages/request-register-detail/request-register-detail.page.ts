import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, Input, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, NavParams, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-register-detail',
  templateUrl: './request-register-detail.page.html',
  styleUrls: ['./request-register-detail.page.scss'],
})
export class RequestRegisterDetailPage implements OnInit, AfterViewInit {
  
  @ViewChild('contentRequest') contentRequest: any;
  @ViewChild('content') content: any;
  @ViewChild('chat_input') messageInput: any;

  requestTitle: string;
  requestContent: string;
  thumbnail: string;
  createdAt: string;
  createBy: string;
  editorMsg:any;
  msgList:any;
  showEmojiPicker = false;
  currentUser: any;
  feedbackID:string;
  defineHeightScreen:number;
  heightScreen:number;
  listImage: any[] = [];
  widthListScreen:number;
  showMore : false;
  list_image_select: any;

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private translate: TranslateService,
    private platform: Platform,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute) { 
      var self = this;
      platform.ready().then((readySource) => {
        self.widthListScreen = platform.width() * 0.8;
        self.heightScreen = platform.height() * 0.63;
        self.defineHeightScreen = this.heightScreen;
      });
      UtilsService.requestDetailComponentShare = this;
  }

  ngOnInit() {
    this.list_image_select = [];
    this.requestTitle = "";
    this.requestContent = "";
    this.currentUser = JSON.parse(localStorage.getItem('profile'));

  }

  ngAfterViewInit(){
    const requestID = this.route.snapshot.paramMap.get('id');
    this.getArticleDetail(requestID);
  }

  getArticleDetail(requestID) {
    this.loading.present();
    const self = this;
    this.apiService.getRequestNewDetail(requestID)
      .subscribe(result => {
        self.requestTitle = result.feedbacknew.title;
        self.requestContent = result.feedbacknew.content;
        self.createdAt = result.feedbacknew.createdAt;
        self.createBy = result.feedbacknew.createdBy != null ? result.feedbacknew.createdBy.displayName : "";
        self.feedbackID = result.feedbacknew._id;
        self.listImage = result.feedbacknew.attachments;
        if(self.listImage.length > 0){
          this.heightScreen = self.defineHeightScreen - 100;
        }
        self.updateSizeContent();
        self.getListMessage(self.feedbackID);
    },
    error => {
      self.loading.dismiss();
    });
  }

  getListMessage(feedbackID, isRefresh= false){
    const self = this;
    this.apiService.getListFeedbackNewReply(feedbackID)
    .subscribe(result => {
      self.msgList = result.feedbacknewReplies.slice().reverse();
      self.scrollToBottom();
      if(isRefresh){
        self.focus();
      }
      self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }
  
  formatStringFull(stringDate: string) {
    return UtilsService.formatStringFull(stringDate);
  }

  backScreen(event){
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back'
    })
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  updateSizeContent(){
    var self = this;
    setTimeout(() => {
      // console.log(self.contentRequest);
      // console.log(self.content);
      // console.log(self.messageInput);
      self.heightScreen = self.messageInput.nativeElement.getBoundingClientRect().top - self.contentRequest.nativeElement.getBoundingClientRect().bottom - 2;
    }, 400);
  }

  sendMsg() {
    if (!this.editorMsg.trim()) return;
    var self = this;
    // Mock message
    const id = Date.now().toString();
    let newMsg = {
      messageId: id,
      createdBy:{
        displayName : this.currentUser.displayName,
        _id: this.currentUser._id,
        avatar: this.currentUser.avatar == "" ? '../assets/icon/avatar-default.png' : this.currentUser.avatar
      },
      createdAt: new Date().toISOString(),
      content: this.editorMsg,
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }
    const params = {
      content: newMsg.content
    };

    this.apiService.addFeedbackNewReply(self.feedbackID, params)
    .subscribe(result => {
      let index = this.getMsgIndexById(id);
        if (index !== -1) {
          self.msgList[index].status = 'success';
        }
    },
    error => {
      self.loading.dismiss();
    });
  }

  sendAttachmentImage() {
    if (this.list_image_select.length == 0) return;
    var self = this;
    // // Mock message
    const id = Date.now().toString();
    let listAttachments = [];
    for(var i=0;i<self.list_image_select.length;i++){
      listAttachments.push(self.list_image_select[i].media);
    }
    let newMsg = {
      messageId: id,
      createdBy:{
        displayName : this.currentUser.displayName,
        _id: this.currentUser._id,
        avatar: this.currentUser.avatar == "" ? '../assets/icon/avatar-default.png' : this.currentUser.avatar
      },
      createdAt: new Date().toISOString(),
      content: " ",
      attachments: listAttachments
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }
    const params = {
      content: " ",
      attachments: listAttachments
    };

    this.apiService.addFeedbackNewReply(self.feedbackID, params)
    .subscribe(result => {
      self.list_image_select = [];
      let index = this.getMsgIndexById(id);
      if (index !== -1) {
        self.msgList[index].status = 'success';
      }
    },
    error => {
      self.loading.dismiss();
    });
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: any) {
    this.msgList.push(msg);
    this.scrollToBottom();
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  scrollToBottom() {
    var self = this;
    setTimeout(() => {
      if (self.content.scrollToBottom) {
        self.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
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
        self.list_image_select = [];
        self.list_image_select.push(result);
        self.sendAttachmentImage();
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
