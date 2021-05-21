import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { GuidelinePageRoutingModule } from './guideline-routing.module';
import { GuidelinePage } from './guideline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GuidelinePageRoutingModule
  ],
  declarations: [GuidelinePage]
})
export class GuidelinePageModule {}
