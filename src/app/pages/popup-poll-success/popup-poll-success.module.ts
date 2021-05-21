import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupPollSuccessPageRoutingModule } from './popup-poll-success-routing.module';

import { PopupPollSuccessPage } from './popup-poll-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupPollSuccessPageRoutingModule
  ],
  declarations: [PopupPollSuccessPage]
})
export class PopupPollSuccessPageModule {}
