import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupBookingServicePage } from './popup-booking-service.page';

describe('PopupBookingServicePage', () => {
  let component: PopupBookingServicePage;
  let fixture: ComponentFixture<PopupBookingServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupBookingServicePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupBookingServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
