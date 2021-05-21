import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupPaymentFunctionPage } from './popup-payment-function.page';

describe('PopupPaymentFunctionPage', () => {
  let component: PopupPaymentFunctionPage;
  let fixture: ComponentFixture<PopupPaymentFunctionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPaymentFunctionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPaymentFunctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
