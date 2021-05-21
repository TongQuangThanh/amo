import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTheCarPage } from './call-the-car.page';

describe('CallTheCarPage', () => {
  let component: CallTheCarPage;
  let fixture: ComponentFixture<CallTheCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTheCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTheCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
