import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupSelectApartmentPageRoutingModule } from './popup-select-apartment-routing.module';

import { PopupSelectApartmentPage } from './popup-select-apartment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupSelectApartmentPageRoutingModule
  ],
  declarations: [PopupSelectApartmentPage]
})
export class PopupSelectApartmentPageModule {}
