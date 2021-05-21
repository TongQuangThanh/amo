import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupHotlinePageRoutingModule } from './popup-hotline-routing.module';

import { PopupHotlinePage } from './popup-hotline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupHotlinePageRoutingModule
  ],
  declarations: [PopupHotlinePage]
})
export class PopupHotlinePageModule {}
