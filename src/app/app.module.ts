import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './translate-config.service';
import { TokenInterceptor } from './inteceptors/inteceptors.service';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { PincodePasswordPageModule } from './pages/pincode-password/pincode-password.module';
import { PincodeRegisterPageModule } from './pages/auth/pincode-register/pincode-register.module';
import { ApartmentCodeRegisterPageModule } from './pages/auth/apartment-code-register/apartment-code-register.module';
import { CodePush } from '@ionic-native/code-push/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PincodePasswordPageModule,
    PincodeRegisterPageModule,
    ApartmentCodeRegisterPageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    TranslateConfigService,
    OneSignal,
    InAppBrowser,
    Camera,
    HTTP,
    File,
    CodePush,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    
    // NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
