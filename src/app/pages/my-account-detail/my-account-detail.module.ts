import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountDetailPageRoutingModule } from './my-account-detail-routing.module';

import { MyAccountDetailPage } from './my-account-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAccountDetailPageRoutingModule
  ],
  declarations: [MyAccountDetailPage]
})
export class MyAccountDetailPageModule {}
