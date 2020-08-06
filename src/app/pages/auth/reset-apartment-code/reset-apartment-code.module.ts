import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ResetApartmentCodePageRoutingModule } from './reset-apartment-code-routing.module';

import { ResetApartmentCodePage } from './reset-apartment-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ResetApartmentCodePageRoutingModule
  ],
  declarations: [ResetApartmentCodePage]
})
export class ResetApartmentCodePageModule {}
