import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { BookingShopHousePage } from './booking-shop-house.page';

const routes: Routes = [
  {
    path: '',
    component: BookingShopHousePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingShopHousePage],
  providers: [DatePipe]
})
export class BookingShopHousePageModule {}
