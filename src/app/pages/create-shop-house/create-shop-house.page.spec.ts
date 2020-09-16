import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopHousePage } from './create-shop-house.page';

describe('CreateShopHousePage', () => {
  let component: CreateShopHousePage;
  let fixture: ComponentFixture<CreateShopHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShopHousePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShopHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
