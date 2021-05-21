import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupRatingShopPage } from './popup-rating-shop.page';

describe('PopupRatingShopPage', () => {
  let component: PopupRatingShopPage;
  let fixture: ComponentFixture<PopupRatingShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRatingShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupRatingShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
