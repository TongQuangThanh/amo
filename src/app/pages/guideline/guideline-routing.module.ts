import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { GuidelinePage } from './guideline.page';

const routes: Routes = [
  {
    path: '',
    component: GuidelinePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class GuidelinePageRoutingModule {}
