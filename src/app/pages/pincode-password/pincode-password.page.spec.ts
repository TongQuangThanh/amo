import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodePasswordPage } from './pincode-password.page';

describe('PincodePasswordPage', () => {
  let component: PincodePasswordPage;
  let fixture: ComponentFixture<PincodePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodePasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
