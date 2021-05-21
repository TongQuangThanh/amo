import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AddHomePage } from './add-home.page';

const routes: Routes = [
  {
    path: '',
    component: AddHomePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AddHomePageRoutingModule {}
