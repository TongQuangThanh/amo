import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupSelectApartmentPage } from './popup-select-apartment.page';

const routes: Routes = [
  {
    path: '',
    component: PopupSelectApartmentPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupSelectApartmentPageRoutingModule {}
