import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PopupRatingShopPage } from './popup-rating-shop.page';

const routes: Routes = [
  {
    path: '',
    component: PopupRatingShopPage,
  },
];

@NgModule({
  imports: [TranslateModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupRatingShopPageRoutingModule {}
