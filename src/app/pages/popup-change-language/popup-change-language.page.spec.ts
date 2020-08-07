import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupChangeLanguagePage } from './popup-change-language.page';

describe('PopupChangeLanguagePage', () => {
  let component: PopupChangeLanguagePage;
  let fixture: ComponentFixture<PopupChangeLanguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChangeLanguagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupChangeLanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
