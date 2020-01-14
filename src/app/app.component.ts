import { Component } from '@angular/core';

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
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  popupConfigId: string;
  popupThumbnail: string;
  popupButtonTitle: string;
  popupButtonStyle: any;
  popupButtonColor: string;
  popupLink: string;
  isShowPopup: boolean;

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
        self.popupConfigId = result.popupConfig._id;
        self.popupThumbnail = result.popupConfig.thumbnail;
        self.popupButtonTitle = result.popupConfig.buttonTitle;
        if(self.popupButtonTitle != null && self.popupButtonTitle.length > 0){
          self.isShowPopup = true;
        }
        self.popupButtonColor= "color: red;";
        self.popupButtonStyle = { '--background': result.popupConfig.buttonColor, 'color': result.popupConfig.textColor };
        self.popupLink = result.popupConfig.link;

    },
    error => {
    });
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

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((event) => {

    });

    this.oneSignal.handleNotificationOpened().subscribe((openResult:any) => {
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
        }
      }
    });
    this.oneSignal.iOSSettings({
      kOSSettingsKeyAutoPrompt: true,
      kOSSettingsKeyInAppLaunchURL: true
    });
    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      localStorage.setItem('playID', id.userId);
    });
  }
}
