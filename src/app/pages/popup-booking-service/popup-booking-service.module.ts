import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupBookingServicePageRoutingModule } from './popup-booking-service-routing.module';

import { PopupBookingServicePage } from './popup-booking-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupBookingServicePageRoutingModule
  ],
  declarations: [PopupBookingServicePage]
})
export class PopupBookingServiceModule { }
