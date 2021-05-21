import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupShareInfoPageRoutingModule } from './popup-share-info-routing.module';

import { PopupShareInfoPage } from './popup-share-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupShareInfoPageRoutingModule
  ],
  declarations: [PopupShareInfoPage]
})
export class PopupShareInfoModule {}
