import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import {  PopupShopOrderResultPage } from './popup-shop-order-result.page';

describe('PopupFeedbackPage', () => {
  let component:  PopupShopOrderResultPage;
  let fixture: ComponentFixture< PopupShopOrderResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  PopupShopOrderResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent( PopupShopOrderResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
