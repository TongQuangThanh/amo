import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentSuccessPageRoutingModule } from './popup-payment-success-routing.module';

import { PopupPaymentSuccessPage } from './popup-payment-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupPaymentSuccessPageRoutingModule
  ],
  declarations: [PopupPaymentSuccessPage]
})
export class PopupPaymentSuccessPageModule {}
