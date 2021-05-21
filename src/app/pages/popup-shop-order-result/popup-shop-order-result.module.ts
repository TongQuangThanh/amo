import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupShopOrderResultPageRoutingModule} from './popup-shop-order-result-routing.module';

import { PopupShopOrderResultPage } from './popup-shop-order-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupShopOrderResultPageRoutingModule
  ],
  declarations: [PopupShopOrderResultPage]
})
export class  PopupShopOrderResultModule {}
