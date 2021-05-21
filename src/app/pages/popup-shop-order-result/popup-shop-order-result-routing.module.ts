import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupShopOrderResultPage } from './popup-shop-order-result.page';

const routes: Routes = [
  {
    path: '',
    component: PopupShopOrderResultPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupShopOrderResultPageRoutingModule {}
