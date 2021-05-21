import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupFeedbackPage } from './popup-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: PopupFeedbackPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupFeedbackPageRoutingModule {}
