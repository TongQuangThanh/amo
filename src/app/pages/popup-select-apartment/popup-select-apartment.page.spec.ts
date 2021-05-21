import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupSelectApartmentPage } from './popup-select-apartment.page';

describe('PopupSelectApartmentPage', () => {
  let component: PopupSelectApartmentPage;
  let fixture: ComponentFixture<PopupSelectApartmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSelectApartmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupSelectApartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
