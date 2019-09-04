import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.router.module';

import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
