import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestDetailPage } from './request-detail.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: RequestDetailPage
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
  declarations: [RequestDetailPage]
})
export class RequestDetailPageModule {}
