import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { RepairServiceDetailPage } from './repair-service-detail.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

const routes: Routes = [
  {
    path: '',
    component: RepairServiceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MatTabsModule,
    SuperTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RepairServiceDetailPage]
})
export class RepairServiceDetailPageModule {}

