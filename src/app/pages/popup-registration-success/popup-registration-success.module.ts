import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupRegistrationSuccessPageRoutingModule } from './popup-registration-success-routing.module';

import { PopupRegistrationSuccessPage } from './popup-registration-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupRegistrationSuccessPageRoutingModule
  ],
  declarations: [PopupRegistrationSuccessPage]
})
export class PopupRegistrationSuccessPageModule {}
