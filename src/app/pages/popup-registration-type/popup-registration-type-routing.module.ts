import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupRegistrationTypePage } from './popup-registration-type.page';

const routes: Routes = [
  {
    path: '',
    component: PopupRegistrationTypePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupRegistrationTypePageRoutingModule {}
