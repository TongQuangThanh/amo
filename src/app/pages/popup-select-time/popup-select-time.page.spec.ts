import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupSelectTimePage } from './popup-select-time.page';

describe('PopupSelectTimePage', () => {
  let component: PopupSelectTimePage;
  let fixture: ComponentFixture<PopupSelectTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSelectTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupSelectTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
