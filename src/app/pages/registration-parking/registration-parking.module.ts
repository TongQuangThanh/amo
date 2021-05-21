import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { RegistrationParkingPageRoutingModule } from './registration-parking-routing.module';

import { RegistrationParkingPage } from './registration-parking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RegistrationParkingPageRoutingModule
  ],
  declarations: [RegistrationParkingPage]
})
export class RegistrationParkingPageModule {}
