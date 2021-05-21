import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PopupIframePaymentdPageRoutingModule } from './popup-iframe-payment-routing.module';
import { PopupIframePaymentPage } from './popup-iframe-payment.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    PopupIframePaymentdPageRoutingModule
  ],
  declarations: [PopupIframePaymentPage]
})
export class PopupPincodePaymentPageModule {}
