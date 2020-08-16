import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupPollSuccessPage } from './popup-poll-success.page';

const routes: Routes = [
  {
    path: '',
    component: PopupPollSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupPollSuccessPageRoutingModule {}
