import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbProfileMessageButtonComponent } from './wb-profile-message-button.component';

describe('WbProfileMessageButtonComponent', () => {
  let component: WbProfileMessageButtonComponent;
  let fixture: ComponentFixture<WbProfileMessageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbProfileMessageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbProfileMessageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
