import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingShopHousePage } from './booking-shop-house.page';

describe('BookingShopHousePage', () => {
  let component: BookingShopHousePage;
  let fixture: ComponentFixture<BookingShopHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingShopHousePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingShopHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
