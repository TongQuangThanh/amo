import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRegisterDetailPage } from './request-register-detail.page';

describe('RequestRegisterDetailPage', () => {
  let component: RequestRegisterDetailPage;
  let fixture: ComponentFixture<RequestRegisterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRegisterDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRegisterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
