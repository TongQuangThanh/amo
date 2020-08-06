import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupPaymentOnlinePage } from './popup-payment-online.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPaymentOnlinePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupPaymentOnlinePageRoutingModule {}
