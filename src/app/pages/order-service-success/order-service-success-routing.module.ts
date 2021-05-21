import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { OrderServiceSuccessPage } from './order-service-success.page';

const routes: Routes = [
  {
    path: '',
    component: OrderServiceSuccessPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderServiceSuccessPageRoutingModule {}
