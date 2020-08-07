import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupBuildingManagementPhonePage } from './popup-building-management-phone.page';

const routes: Routes = [
  {
    path: '',
    component: PopupBuildingManagementPhonePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupBuildingManagementPhonePageRoutingModule {}
