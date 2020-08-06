import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupBuildingManagementPhonePage } from './popup-building-management-phone.page';

describe('PopupBuildingManagementPhonePage', () => {
  let component: PopupBuildingManagementPhonePage;
  let fixture: ComponentFixture<PopupBuildingManagementPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBuildingManagementPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupBuildingManagementPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
