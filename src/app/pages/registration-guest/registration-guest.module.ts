import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { RegistrationGuestPageRoutingModule } from './registration-guest-routing.module';

import { RegistrationGuestPage } from './registration-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RegistrationGuestPageRoutingModule
  ],
  declarations: [RegistrationGuestPage]
})
export class RegistrationGuestPageModule {}
