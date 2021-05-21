import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupHotlinePage } from './popup-hotline.page';

const routes: Routes = [
  {
    path: '',
    component: PopupHotlinePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupHotlinePageRoutingModule {}
