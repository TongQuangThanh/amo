import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentFunctionPageRoutingModule } from './popup-payment-function-routing.module';

import { PopupPaymentFunctionPage } from './popup-payment-function.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupPaymentFunctionPageRoutingModule
  ],
  declarations: [PopupPaymentFunctionPage],
})
export class PopupPaymentFunctionPageModule {}
