import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupPaymentCashPage } from './popup-payment-cash.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPaymentCashPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupPaymentCashPageRoutingModule {}
