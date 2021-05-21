import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupChangeTimeOrderPage } from './popup-change-time-order.page';

describe('PopupChangeTimeOrderPage', () => {
  let component: PopupChangeTimeOrderPage;
  let fixture: ComponentFixture<PopupChangeTimeOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChangeTimeOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupChangeTimeOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
