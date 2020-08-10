import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioHangPage } from './gio-hang.page';

describe('GioHangPage', () => {
  let component: GioHangPage;
  let fixture: ComponentFixture<GioHangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioHangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioHangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
