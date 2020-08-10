import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServicePage } from './repair-service.page';

describe('RepairServicePage', () => {
  let component: RepairServicePage;
  let fixture: ComponentFixture<RepairServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
