import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RegistrationGuestPage } from './registration-guest.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationGuestPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RegistrationGuestPageRoutingModule {}
