import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupRequestHouseSaleSuccessPage } from './popup-request-house-sale-success.page';

const routes: Routes = [
  {
    path: '',
    component: PopupRequestHouseSaleSuccessPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupOpenMarketPageRoutingModule {}
