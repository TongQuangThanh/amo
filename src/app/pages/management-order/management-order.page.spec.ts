import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementOrderPage } from './management-order.page';

describe('ManagementOrderPage', () => {
  let component: ManagementOrderPage;
  let fixture: ComponentFixture<ManagementOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
