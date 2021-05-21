import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupLogoutPageRoutingModule } from './popup-logout-routing.module';

import { PopupLogoutPage } from './popup-logout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupLogoutPageRoutingModule
  ],
  declarations: [PopupLogoutPage]
})
export class PopupLogoutPageModule {}
