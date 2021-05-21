import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentCashPageRoutingModule } from './popup-payment-cash-routing.module';

import { PopupPaymentCashPage } from './popup-payment-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupPaymentCashPageRoutingModule
  ],
  declarations: [PopupPaymentCashPage]
})
export class PopupPaymentCashPageModule {}
