import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { DeleteHomeMemberPage } from './delete-home-member.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteHomeMemberPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DeleteHomeMemberPageRoutingModule {}
