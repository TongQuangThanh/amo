import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { AlertService } from './services/alert/alert.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private oneSignal: OneSignal
  ) {
    splashScreen.hide();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // if (this.platform.is('cordova')) {
      this.setupPushOneSign();
      //
      // this.authService.getToken();
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
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data);
      },
      error => {
        this.alertService.presentToast(JSON.stringify(error));
      },
      () => {
        this.navCtrl.navigateRoot('/landing');
      }
    );
  }
}
