import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HistoryDetailPage } from './history-detail.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

const routes: Routes = [
  {
    path: '',
    component: HistoryDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SuperTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoryDetailPage]
})
export class HistoryDetailPageModule {}
