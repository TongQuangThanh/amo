import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupIframePaymentPage } from './popup-iframe-payment.page';

describe('PopupIframePaymentPage', () => {
  let component: PopupIframePaymentPage;
  let fixture: ComponentFixture<PopupIframePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupIframePaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupIframePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
