import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentTransferPageRoutingModule } from './popup-payment-transfer-routing.module';

import { PopupPaymentTransferPage } from './popup-payment-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupPaymentTransferPageRoutingModule
  ],
  declarations: [PopupPaymentTransferPage]
})
export class PopupPaymentTransferPageModule {}
