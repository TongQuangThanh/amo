import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { MyAccountDetailPage } from './my-account-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MyAccountDetailPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MyAccountDetailPageRoutingModule {}
