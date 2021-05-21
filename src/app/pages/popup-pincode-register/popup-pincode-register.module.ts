import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PopupPincodeRegisterPageRoutingModule } from './popup-pincode-register-routing.module';

import { PopupPincodeRegisterPage } from './popup-pincode-register.page';
const routes: Routes = [
  {
    path: '',
    component: PopupPincodeRegisterPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    PopupPincodeRegisterPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopupPincodeRegisterPage]
})
export class PopupPincodeRegisterPageModule {}
