import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentMarketPage } from './resident-market.page';

describe('ResidentMarketPage', () => {
  let component: ResidentMarketPage;
  let fixture: ComponentFixture<ResidentMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentMarketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
