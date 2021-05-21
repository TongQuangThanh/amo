import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupOwnerRelationshipPage } from './popup-owner-relationship.page';

const routes: Routes = [
  {
    path: '',
    component: PopupOwnerRelationshipPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupOwnerRelationshipPageRoutingModule {}
