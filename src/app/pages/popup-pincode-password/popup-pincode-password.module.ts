import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupPincodePasswordPageRoutingModule } from './popup-pincode-password-routing.module';

import { PopupPincodePasswordPage } from './popup-pincode-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    PopupPincodePasswordPageRoutingModule
  ],
  declarations: [PopupPincodePasswordPage]
})
export class PopupPincodePasswordPageModule {}
