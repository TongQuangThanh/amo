import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupSurveyDetailPage } from './popup-survey-detail.page';

describe('PopupSurveyDetailPage', () => {
  let component: PopupSurveyDetailPage;
  let fixture: ComponentFixture<PopupSurveyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSurveyDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupSurveyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
