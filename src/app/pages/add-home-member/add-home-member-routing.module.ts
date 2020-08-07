import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AddHomeMemberPage } from './add-home-member.page';

const routes: Routes = [
  {
    path: '',
    component: AddHomeMemberPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AddHomeMemberPageRoutingModule {}
