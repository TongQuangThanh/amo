import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RegistrationParkingPage } from './registration-parking.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationParkingPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RegistrationParkingPageRoutingModule {}
