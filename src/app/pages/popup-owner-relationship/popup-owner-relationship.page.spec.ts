import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupOwnerRelationshipPage } from './popup-owner-relationship.page';

describe('PopupOwnerRelationshipPage', () => {
  let component: PopupOwnerRelationshipPage;
  let fixture: ComponentFixture<PopupOwnerRelationshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupOwnerRelationshipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupOwnerRelationshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
