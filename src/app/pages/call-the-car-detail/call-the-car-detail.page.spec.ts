import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTheCarDetailPage } from './call-the-car-detail.page';

describe('CallTheCarDetailPage', () => {
  let component: CallTheCarDetailPage;
  let fixture: ComponentFixture<CallTheCarDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTheCarDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTheCarDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
