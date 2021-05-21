import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PopupPaymentTransferPage } from './popup-payment-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPaymentTransferPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupPaymentTransferPageRoutingModule {}
