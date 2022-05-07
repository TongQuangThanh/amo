import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHouseSalePage } from './request-house-sale.page';

describe('CreateShopHousePage', () => {
  let component: RequestHouseSalePage;
  let fixture: ComponentFixture<RequestHouseSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestHouseSalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestHouseSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
