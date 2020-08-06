import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupDeleteVehiclePage } from './popup-delete-vehicle.page';

describe('PopupDeleteVehiclePage', () => {
  let component: PopupDeleteVehiclePage;
  let fixture: ComponentFixture<PopupDeleteVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDeleteVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupDeleteVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
