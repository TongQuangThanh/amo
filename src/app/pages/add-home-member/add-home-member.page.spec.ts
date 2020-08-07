import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHomeMemberPage } from './add-home-member.page';

describe('AddHomeMemberPage', () => {
  let component: AddHomeMemberPage;
  let fixture: ComponentFixture<AddHomeMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHomeMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHomeMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
