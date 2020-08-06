import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupLogoutPage } from './popup-logout.page';

const routes: Routes = [
  {
    path: '',
    component: PopupLogoutPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupLogoutPageRoutingModule {}
