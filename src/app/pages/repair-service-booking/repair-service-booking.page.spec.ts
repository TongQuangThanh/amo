import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServiceBookingPage } from './repair-service-booking.page';

describe('RepairServiceBookingPage', () => {
  let component: RepairServiceBookingPage;
  let fixture: ComponentFixture<RepairServiceBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairServiceBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairServiceBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
