import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHomePage } from './add-home.page';

describe('AddHomePage', () => {
  let component: AddHomePage;
  let fixture: ComponentFixture<AddHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
