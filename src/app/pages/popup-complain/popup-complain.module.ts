import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupComplainPageRoutingModule } from './popup-complain-routing.module';

import { PopupComplainPage } from './popup-complain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupComplainPageRoutingModule
  ],
  declarations: [PopupComplainPage]
})
export class PopupComplainPageModule {}
