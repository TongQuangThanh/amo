import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupRegistrationTypePageRoutingModule } from './popup-registration-type-routing.module';

import { PopupRegistrationTypePage } from './popup-registration-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupRegistrationTypePageRoutingModule
  ],
  declarations: [PopupRegistrationTypePage]
})
export class PopupRegistrationTypePageModule {}
