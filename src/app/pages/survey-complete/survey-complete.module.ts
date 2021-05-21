import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { SurveyCompleteComponent } from './survey-complete.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyCompleteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MatTabsModule,
    SuperTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyCompleteComponent]
})
export class SurveyCompletePageModule {}

