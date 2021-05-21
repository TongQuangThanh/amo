import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupRegistrationTypePage } from './popup-registration-type.page';

describe('PopupRegistrationTypePage', () => {
  let component: PopupRegistrationTypePage;
  let fixture: ComponentFixture<PopupRegistrationTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRegistrationTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupRegistrationTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
