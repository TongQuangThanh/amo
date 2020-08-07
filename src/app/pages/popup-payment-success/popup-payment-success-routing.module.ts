import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupPaymentSuccessPage } from './popup-payment-success.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPaymentSuccessPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupPaymentSuccessPageRoutingModule {}
