import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuidelinePage } from './guideline.page';

describe('GuidelinePage', () => {
  let component: GuidelinePage;
  let fixture: ComponentFixture<GuidelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
