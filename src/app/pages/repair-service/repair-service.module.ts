import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { RepairServicePage } from './repair-service.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

const routes: Routes = [
  {
    path: '',
    component: RepairServicePage
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
  declarations: [RepairServicePage]
})
export class RepairServicePageModule {}
