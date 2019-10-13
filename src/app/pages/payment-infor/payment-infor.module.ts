import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentInforPage } from './payment-infor.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentInforPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentInforPage]
})
export class PaymentInforPageModule {}
