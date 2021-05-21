import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PopupSurveyDetailPageRoutingModule } from './popup-survey-detail-routing.module';
import { PopupSurveyDetailPage } from './popup-survey-detail.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupSurveyDetailPageRoutingModule
  ],
  declarations: [PopupSurveyDetailPage]
})
export class PopupSurveyDetailPageModule {}
