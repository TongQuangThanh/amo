import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupOpenMarketPageRoutingModule } from './popup-open-market-routing.module';

import { PopupOpenMarketPage } from './popup-open-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupOpenMarketPageRoutingModule
  ],
  declarations: [PopupOpenMarketPage],
})
export class PopupOpenMarketPageModule {}
