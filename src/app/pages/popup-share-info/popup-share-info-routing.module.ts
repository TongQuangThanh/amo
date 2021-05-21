import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PopupShareInfoPage } from './popup-share-info.page';

const routes: Routes = [
  {
    path: '',
    component: PopupShareInfoPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PopupShareInfoPageRoutingModule {}
