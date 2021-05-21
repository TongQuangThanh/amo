import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupHotlinePage } from './popup-hotline.page';

describe('PopupHotlinePage', () => {
  let component: PopupHotlinePage;
  let fixture: ComponentFixture<PopupHotlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupHotlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupHotlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
