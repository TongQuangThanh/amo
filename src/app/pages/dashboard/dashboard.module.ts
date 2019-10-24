import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.router.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
