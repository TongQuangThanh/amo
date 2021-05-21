import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHousePage } from './shop-house.page';

describe('ShopHousePage', () => {
  let component: ShopHousePage;
  let fixture: ComponentFixture<ShopHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopHousePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
