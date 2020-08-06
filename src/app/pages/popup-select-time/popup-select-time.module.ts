import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupSelectTimePageRoutingModule } from './popup-select-time-routing.module';

import { PopupSelectTimePage } from './popup-select-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupSelectTimePageRoutingModule
  ],
  declarations: [PopupSelectTimePage]
})
export class PopupSelectTimePageModule {}
