import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbProfileConnectButtonComponent } from './wb-profile-connect-button.component';

describe('WbProfileConnectButtonComponent', () => {
  let component: WbProfileConnectButtonComponent;
  let fixture: ComponentFixture<WbProfileConnectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbProfileConnectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbProfileConnectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
