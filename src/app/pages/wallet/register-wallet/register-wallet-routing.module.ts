import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RegisterWalletPage } from './register-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterWalletPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RegisterWalletRoutingModule {}
