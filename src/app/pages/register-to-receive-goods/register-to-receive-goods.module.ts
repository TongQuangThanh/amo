import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RegisterToReceiveGoodsPage } from './register-to-receive-goods.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterToReceiveGoodsPage
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
  declarations: [RegisterToReceiveGoodsPage]
})
export class RegisterToReceiveGoodsPageModule {}
