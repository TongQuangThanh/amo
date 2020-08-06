import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoGianHangPage } from './mo-gian-hang.page';

describe('MoGianHangPage', () => {
  let component: MoGianHangPage;
  let fixture: ComponentFixture<MoGianHangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoGianHangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoGianHangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
