import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatToShopPage } from './chat-to-shop.page';

describe('ChatToShopPage', () => {
  let component: ChatToShopPage;
  let fixture: ComponentFixture<ChatToShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatToShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatToShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
