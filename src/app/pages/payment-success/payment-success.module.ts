import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';

import { PaymentSuccessPage } from './payment-success.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SuperTabsModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PaymentSuccessPage]
})
export class PaymentSuccessPageModule {}
