import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteHomeMemberPage } from './delete-home-member.page';

describe('DeleteHomeMemberPage', () => {
  let component: DeleteHomeMemberPage;
  let fixture: ComponentFixture<DeleteHomeMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHomeMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteHomeMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
