import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PopupSurveyDetailPage } from './popup-survey-detail.page';


const routes: Routes = [
  {
    path: '',
    component: PopupSurveyDetailPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupSurveyDetailPageRoutingModule {}
