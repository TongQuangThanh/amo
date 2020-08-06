import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupRegistrationSuccessPage } from './popup-registration-success.page';

const routes: Routes = [
  {
    path: '',
    component: PopupRegistrationSuccessPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupRegistrationSuccessPageRoutingModule {}
