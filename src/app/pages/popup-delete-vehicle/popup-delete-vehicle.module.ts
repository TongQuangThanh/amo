import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupDeleteVehiclePageRoutingModule } from './popup-delete-vehicle-routing.module';

import { PopupDeleteVehiclePage } from './popup-delete-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupDeleteVehiclePageRoutingModule
  ],
  declarations: [PopupDeleteVehiclePage]
})
export class PopupDeleteVehiclePageModule {}
