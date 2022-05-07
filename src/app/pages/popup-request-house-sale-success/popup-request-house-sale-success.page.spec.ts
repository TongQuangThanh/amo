import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupRequestHouseSaleSuccessPage } from './popup-request-house-sale-success.page';

describe('PopupOpenMarketPage', () => {
  let component: PopupRequestHouseSaleSuccessPage;
  let fixture: ComponentFixture<PopupRequestHouseSaleSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRequestHouseSaleSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupRequestHouseSaleSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
