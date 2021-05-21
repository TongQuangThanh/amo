import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { AddHomeVehiclePageRoutingModule } from './add-home-vehicle-routing.module';

import { AddHomeVehiclePage } from './add-home-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddHomeVehiclePageRoutingModule
  ],
  declarations: [AddHomeVehiclePage]
})
export class AddHomeVehiclePageModule {}
