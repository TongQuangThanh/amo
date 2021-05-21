import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetApartmentCodePage } from './reset-apartment-code.page';

describe('ResetApartmentCodePage', () => {
  let component: ResetApartmentCodePage;
  let fixture: ComponentFixture<ResetApartmentCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetApartmentCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetApartmentCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
