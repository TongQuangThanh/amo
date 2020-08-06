import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ResetApartmentCodePage } from './reset-apartment-code.page';

const routes: Routes = [
  {
    path: '',
    component: ResetApartmentCodePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ResetApartmentCodePageRoutingModule {}
