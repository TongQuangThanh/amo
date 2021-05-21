import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupPaymentFunctionPage } from './popup-payment-function.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPaymentFunctionPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupPaymentFunctionPageRoutingModule {}
