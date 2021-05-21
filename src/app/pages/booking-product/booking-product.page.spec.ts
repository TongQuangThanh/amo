import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingProductPage } from './booking-product.page';

describe('BookingProductPage', () => {
  let component: BookingProductPage;
  let fixture: ComponentFixture<BookingProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
