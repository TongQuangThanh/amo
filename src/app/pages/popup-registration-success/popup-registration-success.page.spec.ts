import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupRegistrationSuccessPage } from './popup-registration-success.page';

describe('PopupRegistrationSuccessPage', () => {
  let component: PopupRegistrationSuccessPage;
  let fixture: ComponentFixture<PopupRegistrationSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRegistrationSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupRegistrationSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
