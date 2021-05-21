import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupChangeLanguagePageRoutingModule } from './popup-change-language-routing.module';

import { PopupChangeLanguagePage } from './popup-change-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupChangeLanguagePageRoutingModule
  ],
  declarations: [PopupChangeLanguagePage]
})
export class PopupChangeLanguagePageModule {}
