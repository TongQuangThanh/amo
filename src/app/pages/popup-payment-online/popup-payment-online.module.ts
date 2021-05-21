import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentOnlinePageRoutingModule } from './popup-payment-online-routing.module';

import { PopupPaymentOnlinePage } from './popup-payment-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupPaymentOnlinePageRoutingModule
  ],
  declarations: [PopupPaymentOnlinePage]
})
export class PopupPaymentOnlinePageModule {}
