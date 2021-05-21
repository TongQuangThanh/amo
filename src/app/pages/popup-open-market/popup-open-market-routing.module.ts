import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupOpenMarketPage } from './popup-open-market.page';

const routes: Routes = [
  {
    path: '',
    component: PopupOpenMarketPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupOpenMarketPageRoutingModule {}
