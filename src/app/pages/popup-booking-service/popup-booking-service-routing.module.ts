import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupBookingServicePage } from './popup-booking-service.page';

const routes: Routes = [
  {
    path: '',
    component: PopupBookingServicePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupBookingServicePageRoutingModule { }