import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { AlertService } from './services/alert/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ApiService } from './services/api/api.service';
import { CodePush, InstallMode, SyncStatus } from '@ionic-native/code-push/ngx';
import { TranslateConfigService } from './translate-config.service';
import { UtilsService } from './utils/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  popupConfigId: string;
  popupThumbnail: string;
  popupButtonTitle: string;
  popupButtonBackgroud: string;
  popupButtonColor: string;
  popupLink: string;
  isShowPopup: boolean;
  btnAction: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private oneSignal: OneSignal,
    private codePush: CodePush,
    private router: Router,
    private apiService: ApiService,
    private translateConfigService: TranslateConfigService
  ) {
    splashScreen.hide();
    this.initializeApp();
    this.popupThumbnail = "";
    this.popupButtonTitle = "";
    this.popupLink = "";
    this.isShowPopup = false;
    this.getConfigPopup();
  }

  getConfigPopup() {
    const self = this;
    this.apiService.getPopupConfig()
      .subscribe(result => {
        //console.log(result.popupConfig)
        self.popupConfigId = result.popupConfig._id;
        self.popupThumbnail = result.popupConfig.thumbnail;
        self.popupButtonTitle = result.popupConfig.buttonTitle;
        if(self.popupButtonTitle != null && self.popupButtonTitle.length > 0){
          self.isShowPopup = true;
        }
        self.popupButtonBackgroud = "#" + result.popupConfig.buttonColor;
        self.popupButtonColor = "#" + result.popupConfig.textColor;
        self.popupLink = result.popupConfig.link;

    },
    error => {
    });
  }

  hex2Rgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  getButtonBackgroud(){
    var colorRGB = this.hex2Rgb(this.popupButtonBackgroud);
    //console.log(colorRGB);
    var resultColorString = 'rgb('+ colorRGB.r +', '+ colorRGB.g +', '+ colorRGB.b +')';
    return resultColorString;
  }

  getButtonColor(){
    var colorRGB = this.hex2Rgb(this.popupButtonColor);
    var resultColorString = 'rgb('+ colorRGB.r +', '+ colorRGB.g +', '+ colorRGB.b +')';
    return resultColorString;
  }

  
  

  addCountPopupConfigClick(){
    this.apiService.countUserPopupConfigClick(this.popupConfigId).subscribe(result => {
      console.log(result);
    },
    error => {
    });
  }

  changeScreenPopup(){
    this.addCountPopupConfigClick();
    this.isShowPopup = false;
    this.navCtrl.navigateForward(this.popupLink);
  }
  closePopup(){
    this.isShowPopup = false;
  }

  initializeApp() {
    var self = this;
    this.platform.ready().then(() => {
      self.statusBar.styleDefault();
      self.setupPushOneSign();
      self.checkCodePush();
      self.translateConfigService.setLanguageDefault()
    });
  }

  checkCodePush() {
    this.codePush.sync({
     updateDialog: {
      appendReleaseDescription: true,
      optionalInstallButtonLabel: "Update",
      optionalIgnoreButtonLabel: "Cancel",
      descriptionPrefix: "\n\nChange log:\n"
     },
     installMode: InstallMode.IMMEDIATE,
    }).subscribe(
    (data) => {
      console.log('CODE PUSH SUCCESSFUL: ' + data);
    },
    (err) => {
      console.log('CODE PUSH ERROR: ' + err);
    });
  }

  addCountUserClick(popupID:string){
    this.apiService.countNotificationUserClick(popupID).subscribe(result => {
    },
    error => {
    });
  }

  setupPushOneSign() {
    var self = this;
    this.oneSignal.startInit('712abf97-1cbe-442b-8c16-d10e29e292a4');

    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((event) => {

    });

    this.oneSignal.handleNotificationOpened().subscribe((openResult:any) => {
      console.log(openResult);
      if(UtilsService.isAppOpen){
        if(openResult.notification.payload.additionalData.type == "post"){
          if(openResult.notification.payload.additionalData.popupConfig_id != null && 
            openResult.notification.payload.additionalData.popupConfig_id != ""){
              self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
          }
          self.navCtrl.navigateForward('/new-detail/' + openResult.notification.payload.additionalData._id);
        }if(openResult.notification.payload.additionalData.type == "service"){
          if(openResult.notification.payload.additionalData.popupConfig_id != null && 
            openResult.notification.payload.additionalData.popupConfig_id != ""){
              self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
          }
          self.navCtrl.navigateForward('/service-detail/' + openResult.notification.payload.additionalData._id);
        }else if(openResult.notification.payload.additionalData.type == "feedbackReply" && 
          self.router.url == "/request-detail/" + openResult.notification.payload.additionalData.feedback){
          UtilsService.requestDetailComponentShare.getListMessage(openResult.notification.payload.additionalData.feedback, true);
        }else if(openResult.notification.payload.additionalData.type == "feedbackReply"){
          self.navCtrl.navigateForward('/request-detail/' + openResult.notification.payload.additionalData.feedback);
        }else if(openResult.notification.payload.additionalData.type == "feedback"){
          self.navCtrl.navigateForward('/request-detail/' + openResult.notification.payload.additionalData._id);
        }else if(openResult.notification.payload.additionalData.type == "article"){
          self.navCtrl.navigateForward('/notification-detail/' + openResult.notification.payload.additionalData._id);
        }else if(openResult.notification.payload.additionalData.type == "articleComment"){
          self.navCtrl.navigateForward('/notification-detail/' + openResult.notification.payload.additionalData.article._id);
        }else if(openResult.notification.payload.additionalData.type == "articleReply"){
          self.navCtrl.navigateForward('/notification-comment/' + openResult.notification.payload.additionalData.article._id);
        }else if(openResult.notification.payload.additionalData.type == "paymentBill"){
          self.navCtrl.navigateForward('/payment-infor/' + openResult.notification.payload.additionalData._id);
        }else if(openResult.notification.payload.additionalData.type == "paymentLog"){
          self.navCtrl.navigateForward('/payment-infor/' + openResult.notification.payload.additionalData.paymentBill);
        }else if(openResult.notification.payload.additionalData.type == "paymentComment"){
          self.navCtrl.navigateForward('/payment-comment/' + openResult.notification.payload.additionalData.paymentBill);
        }
      }else{
        if(openResult.notification.payload.additionalData.type == "post"){
          if(openResult.notification.payload.additionalData.popupConfig_id != null && 
            openResult.notification.payload.additionalData.popupConfig_id != ""){
              self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
          }
          UtilsService.notificationNavigatorLink = '/new-detail/' + openResult.notification.payload.additionalData._id;
        }if(openResult.notification.payload.additionalData.type == "service"){
          if(openResult.notification.payload.additionalData.popupConfig_id != null && 
            openResult.notification.payload.additionalData.popupConfig_id != ""){
              self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
          }
          UtilsService.notificationNavigatorLink = '/service-detail/' + openResult.notification.payload.additionalData._id;
        }else if(openResult.notification.payload.additionalData.type == "feedbackReply"){
          UtilsService.notificationNavigatorLink = '/request-detail/' + openResult.notification.payload.additionalData.feedback;
        }else if(openResult.notification.payload.additionalData.type == "feedback"){
          UtilsService.notificationNavigatorLink = '/request-detail/' + openResult.notification.payload.additionalData._id;
        }else if(openResult.notification.payload.additionalData.type == "article"){
          UtilsService.notificationNavigatorLink = '/notification-detail/' + openResult.notification.payload.additionalData._id;
        }else if(openResult.notification.payload.additionalData.type == "articleComment"){
          UtilsService.notificationNavigatorLink = '/notification-detail/' + openResult.notification.payload.additionalData.article._id;
        }else if(openResult.notification.payload.additionalData.type == "articleReply"){
          UtilsService.notificationNavigatorLink = '/notification-comment/' + openResult.notification.payload.additionalData.article._id;
        }else if(openResult.notification.payload.additionalData.type == "paymentBill"){
          UtilsService.notificationNavigatorLink = '/payment-infor/' + openResult.notification.payload.additionalData._id;
        }else if(openResult.notification.payload.additionalData.type == "paymentLog"){
          UtilsService.notificationNavigatorLink = '/payment-infor/' + openResult.notification.payload.additionalData.paymentBill;
        }else if(openResult.notification.payload.additionalData.type == "paymentComment"){
          UtilsService.notificationNavigatorLink = '/payment-comment/' + openResult.notification.payload.additionalData.paymentBill;
        }
      }
    });
    this.oneSignal.iOSSettings({
      kOSSettingsKeyAutoPrompt: true,
      kOSSettingsKeyInAppLaunchURL: true
    });
    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      console.log("onesign id:");
      console.log(id);
      localStorage.setItem('playID', id.userId);
    });
  }
}
