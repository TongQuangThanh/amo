import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeDetailPage } from './my-home-detail.page';

describe('MyHomeDetailPage', () => {
  let component: MyHomeDetailPage;
  let fixture: ComponentFixture<MyHomeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
