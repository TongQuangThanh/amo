import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteMemberPage } from './popup-delete-member.page';

describe('PincodePasswordPage', () => {
  let component: PopupDeleteMemberPage;
  let fixture: ComponentFixture<PopupDeleteMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDeleteMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeleteMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
