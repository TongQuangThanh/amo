import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit, AfterViewInit {

  @ViewChild('contentRequest', { static: false }) contentRequest: any;
  @ViewChild('content', { static: false }) content: any;
  @ViewChild('chat_input', { static: false }) messageInput: any;

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

  constructor(
    private platform: Platform,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute) { 
      var self = this;
      platform.ready().then((readySource) => {
        self.widthListScreen = platform.width() * 0.8;
        self.heightScreen = platform.height() * 0.65;
        self.defineHeightScreen = this.heightScreen;
      });
      UtilsService.requestDetailComponentShare = this;
  }

  ngOnInit() {
    
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
    this.apiService.getRequestDetail(requestID)
      .subscribe(result => {
        console.log(result);
        self.requestTitle = result.feedback.title;
        self.requestContent = result.feedback.content;
        self.createdAt = result.feedback.createdAt;
        self.createBy = result.feedback.createdBy != null ? result.feedback.createdBy.displayName : "";
        self.feedbackID = result.feedback._id;
        self.listImage = result.feedback.attachments;
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
    this.apiService.getListFeedbackReply(feedbackID)
    .subscribe(result => {
      self.msgList = result.feedbackReplies.slice().reverse();
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

    this.apiService.addFeedbackReply(self.feedbackID, params)
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

}
