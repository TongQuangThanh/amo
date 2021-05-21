import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupFeedbackPageRoutingModule } from './popup-feedback-routing.module';

import { PopupFeedbackPage } from './popup-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupFeedbackPageRoutingModule
  ],
  declarations: [PopupFeedbackPage]
})
export class PopupFeedbackPageModule {}
