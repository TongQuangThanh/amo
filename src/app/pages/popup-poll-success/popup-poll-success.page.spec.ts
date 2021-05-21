import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupPollSuccessPage } from './popup-poll-success.page';

describe('PopupPollSuccessPage', () => {
  let component: PopupPollSuccessPage;
  let fixture: ComponentFixture<PopupPollSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPollSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPollSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
