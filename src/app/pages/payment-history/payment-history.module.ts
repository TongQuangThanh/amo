import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';

import { PaymentHistoryPage } from './payment-history.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: PaymentHistoryPage
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
  declarations: [PaymentHistoryPage]
})
export class PaymentHistoryPageModule {}
