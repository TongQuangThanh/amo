import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKeepVehiclePage } from './register-keep-vehicle.page';

describe('RegisterKeepVehiclePage', () => {
  let component: RegisterKeepVehiclePage;
  let fixture: ComponentFixture<RegisterKeepVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterKeepVehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterKeepVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
