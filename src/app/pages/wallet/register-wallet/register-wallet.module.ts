import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RegisterWalletRoutingModule } from './register-wallet-routing.module';
import { RegisterWalletPage } from './register-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RegisterWalletRoutingModule
  ],
  declarations: [RegisterWalletPage]
})
export class RegisterWalletModule {}
