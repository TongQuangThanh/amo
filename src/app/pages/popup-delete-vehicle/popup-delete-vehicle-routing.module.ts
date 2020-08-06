import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupDeleteVehiclePage } from './popup-delete-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: PopupDeleteVehiclePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupDeleteVehiclePageRoutingModule {}
