import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupOpenMarketPage } from './popup-open-market.page';

describe('PopupOpenMarketPage', () => {
  let component: PopupOpenMarketPage;
  let fixture: ComponentFixture<PopupOpenMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupOpenMarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupOpenMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
