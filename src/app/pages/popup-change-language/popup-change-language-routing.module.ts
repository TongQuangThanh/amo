import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupChangeLanguagePage } from './popup-change-language.page';

const routes: Routes = [
  {
    path: '',
    component: PopupChangeLanguagePage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupChangeLanguagePageRoutingModule {}
