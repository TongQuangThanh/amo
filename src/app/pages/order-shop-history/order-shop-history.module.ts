import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderShopHistoryPageRoutingModule } from './order-shop-history-routing.module';

import { OrderShopHistoryPage } from './order-shop-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderShopHistoryPageRoutingModule
  ],
  declarations: [OrderShopHistoryPage]
})
export class OrderShopHistoryPageModule {}
