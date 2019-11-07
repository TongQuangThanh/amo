import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ApartmentCodeRegisterPage } from './apartment-code-register.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: ApartmentCodeRegisterPage
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
  declarations: [ApartmentCodeRegisterPage]
})
export class ApartmentCodeRegisterPageModule {}
