import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PopupChangeTimeOrderPage } from './popup-change-time-order.page';

const routes: Routes = [
  {
    path: '',
    component: PopupChangeTimeOrderPage,
  },
];

@NgModule({
  imports: [TranslateModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupChangeTimeOrderPageRoutingModule {}
