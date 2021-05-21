import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderServiceSuccessPage } from './order-service-success.page';

describe('PopupPaymentSuccessPage', () => {
  let component: OrderServiceSuccessPage;
  let fixture: ComponentFixture<OrderServiceSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServiceSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderServiceSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
