import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';

import { PaymentFailPage } from './payment-fail.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: PaymentFailPage
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
  declarations: [PaymentFailPage]
})
export class PaymentFailPageModule {}
