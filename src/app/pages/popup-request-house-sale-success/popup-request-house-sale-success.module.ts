import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupOpenMarketPageRoutingModule } from './popup-request-house-sale-success-routing.module';

import { PopupRequestHouseSaleSuccessPage } from './popup-request-house-sale-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupOpenMarketPageRoutingModule
  ],
  declarations: [PopupRequestHouseSaleSuccessPage],
})
export class PopupRequestHouseSaleSuccessPageModule {}
