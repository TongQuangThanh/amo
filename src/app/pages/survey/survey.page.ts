import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { PopupSurveyDetailPage } from '../popup-survey-detail/popup-survey-detail.page';

interface Question {
  question: string;
  question_type: any;
  answer_option?: any;
  answer?: any;
}
type NavigateAction = 'next' | 'prev';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  surveyId: any;
  surveyData: any;
  survey: Array<Question> = [];
  surveyResult = {};

  currentStep = 0;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private alertController: AlertController,
    private apiService: ApiService,
    private modalController: ModalController,
    private loading: LoadingService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.surveyId = this.route.snapshot.paramMap.get('id');
    this.getSurveyDetail();
  }
  ionViewWillEnter() {}

  getSurveyDetail() {
    this.loading.present();
    this.apiService.getArticleDetail(this.surveyId).subscribe(
      (result) => {
        this.surveyData = result.article;
        this.survey = JSON.parse(this.surveyData.survey);
        this.mappingSurveyData();
        this.loading.dismiss();
      },
      (error) => {
        this.loading.dismiss();
      }
    );
  }

  changeStep(action: NavigateAction) {
    if (action === 'next') {
      if (this.currentStep < this.survey.length - 1) {
        const surveyStep = this.survey[this.currentStep];
        if (surveyStep && surveyStep.question_type == '1' && !surveyStep.answer_option.find((opt) => opt.isChecked)) {
          this.presentAlert(this.translate.instant('SURVEY.error_chexbox'));
          return;
        }
        this.currentStep++;
      } else {
        this.createSurveyResult();
        this.apiService.postSurvey(this.surveyData._id, this.surveyResult).subscribe(
          (res) => {
            this.router.navigate(['/survey-post-complete']);
          },
          (error) => {}
        );
      }
    } else {
      this.currentStep--;
    }
  }

  mappingSurveyData() {
    this.survey = this.survey.map((item) => {
      if (item.question_type == '0') {
        item.answer = item.answer_option[0];
        return item;
      }
      if (item.question_type == '1') {
        item.answer_option = item.answer_option.map((option) => ({ value: option, isChecked: false }));
        return item;
      }
      item.answer = '';
      return item;
    });
  }

  createSurveyResult() {
    this.survey.forEach((item, index) => {
      if (item.question_type == '0') {
        this.surveyResult[`${index}`] = { content: item.question, answer: item.answer };
      } else if (item.question_type == '1') {
        const answerResult = item.answer_option.filter((option) => option.isChecked).map((op) => op.value);
        this.surveyResult[`${index}`] = { content: item.question, answer: answerResult };
      } else {
        this.surveyResult[`${index}`] = { content: item.question, answer: item.answer };
      }
    });
  }

  async surveyDetailClick() {
    const modal = await this.modalController.create({
      component: PopupSurveyDetailPage,
      componentProps: {
        surveyData: this.surveyData
      },
      cssClass: 'survey-dtail-custom',
    });
    return await modal.present();
  }

  async presentAlert(message) {
    var self = this;
    const alert = await this.alertController.create({
      header: self.translate.instant('COMMON.information'),
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
