import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PopupPincodeRegisterPage } from './popup-pincode-register.page';

describe('PopupPincodeRegisterPage', () => {
  let component: PopupPincodeRegisterPage;
  let fixture: ComponentFixture<PopupPincodeRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPincodeRegisterPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPincodeRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
