import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RegisterForShippingPage } from './register-for-shipping.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterForShippingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterForShippingPage],
  providers: [DatePipe]
})
export class RegisterForShippingPageModule {}
