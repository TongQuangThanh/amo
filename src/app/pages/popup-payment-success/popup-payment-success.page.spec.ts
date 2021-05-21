import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentSuccessPage } from './popup-payment-success.page';

describe('PopupPaymentSuccessPage', () => {
  let component: PopupPaymentSuccessPage;
  let fixture: ComponentFixture<PopupPaymentSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPaymentSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPaymentSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
