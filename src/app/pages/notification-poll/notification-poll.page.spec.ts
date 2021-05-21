import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationPollPage } from './notification-poll.page';

describe('NotificationPollPage', () => {
  let component: NotificationPollPage;
  let fixture: ComponentFixture<NotificationPollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationPollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
