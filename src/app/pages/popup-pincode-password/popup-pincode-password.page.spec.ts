import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupPincodePasswordPage } from './popup-pincode-password.page';

describe('PopupPincodePasswordPage', () => {
  let component: PopupPincodePasswordPage;
  let fixture: ComponentFixture<PopupPincodePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPincodePasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPincodePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
