import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupLogoutPage } from './popup-logout.page';

describe('PopupLogoutPage', () => {
  let component: PopupLogoutPage;
  let fixture: ComponentFixture<PopupLogoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupLogoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupLogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
