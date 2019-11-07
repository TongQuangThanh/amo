import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PincodeRegisterPage } from './pincode-register.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: PincodeRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PincodeRegisterPage]
})
export class PincodeRegisterPageModule {}
