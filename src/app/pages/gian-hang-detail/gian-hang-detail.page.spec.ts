import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GianHangDetailPage } from './gian-hang-detail.page';

describe('GianHangDetailPage', () => {
  let component: GianHangDetailPage;
  let fixture: ComponentFixture<GianHangDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GianHangDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GianHangDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
