import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForShippingPage } from './register-for-shipping.page';

describe('RegisterForShippingPage', () => {
  let component: RegisterForShippingPage;
  let fixture: ComponentFixture<RegisterForShippingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterForShippingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForShippingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
