import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentCashPage } from './popup-payment-cash.page';

describe('PopupPaymentCashPage', () => {
  let component: PopupPaymentCashPage;
  let fixture: ComponentFixture<PopupPaymentCashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPaymentCashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPaymentCashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
