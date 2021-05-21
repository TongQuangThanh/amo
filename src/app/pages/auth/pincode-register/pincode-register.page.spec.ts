import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeRegisterPage } from './pincode-register.page';

describe('PincodePasswordPage', () => {
  let component: PincodeRegisterPage;
  let fixture: ComponentFixture<PincodeRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodeRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
