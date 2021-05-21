import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupSelectTimePage } from './popup-select-time.page';

const routes: Routes = [
  {
    path: '',
    component: PopupSelectTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupSelectTimePageRoutingModule {}
