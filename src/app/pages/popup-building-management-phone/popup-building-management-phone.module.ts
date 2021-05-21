import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupBuildingManagementPhonePageRoutingModule } from './popup-building-management-phone-routing.module';

import { PopupBuildingManagementPhonePage } from './popup-building-management-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupBuildingManagementPhonePageRoutingModule
  ],
  declarations: [PopupBuildingManagementPhonePage]
})
export class PopupBuildingManagementPhonePageModule {}
