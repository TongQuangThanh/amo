import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupComplainPage } from './popup-complain.page';

describe('PopupComplainPage', () => {
  let component: PopupComplainPage;
  let fixture: ComponentFixture<PopupComplainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupComplainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupComplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
