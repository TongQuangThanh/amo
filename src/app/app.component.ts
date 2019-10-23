import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { AlertService } from './services/alert/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { CodePush, InstallMode, SyncStatus } from '@ionic-native/code-push/ngx';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private oneSignal: OneSignal,
    private codePush: CodePush
  ) {
    splashScreen.hide();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.setupPushOneSign();
      this.checkCodePush();
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

  setupPushOneSign() {
    this.oneSignal.startInit('712abf97-1cbe-442b-8c16-d10e29e292a4');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      localStorage.setItem('playID', id.userId);
    });
  }
}
