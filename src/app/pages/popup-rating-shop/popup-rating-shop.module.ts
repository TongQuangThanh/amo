import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupRatingShopPageRoutingModule } from './popup-rating-shop-routing.module';
import { PopupRatingShopPage } from './popup-rating-shop.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule, PopupRatingShopPageRoutingModule],
  declarations: [PopupRatingShopPage],
})
export class PopupRatingShopPageModule {}
