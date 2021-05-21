import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupShareInfoPage } from './popup-share-info.page';

describe('PopupPaymentTransferPage', () => {
  let component: PopupShareInfoPage;
  let fixture: ComponentFixture<PopupShareInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupShareInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupShareInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
