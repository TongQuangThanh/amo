import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RepairServiceBookingPage } from './repair-service-booking.page';

const routes: Routes = [
  {
    path: '',
    component: RepairServiceBookingPage
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
  declarations: [RepairServiceBookingPage],
  providers: [DatePipe]
})
export class RepairServiceBookingPageModule {}
