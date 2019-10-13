import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServicePage } from './order-service.page';

describe('OrderServicePage', () => {
  let component: OrderServicePage;
  let fixture: ComponentFixture<OrderServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
