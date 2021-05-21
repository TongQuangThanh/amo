import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentPage } from './bill-payment.page';

describe('BillPaymentPage', () => {
  let component: BillPaymentPage;
  let fixture: ComponentFixture<BillPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
