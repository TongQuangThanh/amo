import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AddHomeVehiclePage } from './add-home-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddHomeVehiclePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AddHomeVehiclePageRoutingModule {}
