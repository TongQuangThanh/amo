import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderShopHistoryPage } from './order-shop-history.page';

const routes: Routes = [
  {
    path: '',
    component: OrderShopHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderShopHistoryPageRoutingModule {}
