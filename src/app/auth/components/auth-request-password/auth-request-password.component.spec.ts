import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRequestPasswordComponent } from './auth-request-password.component';

describe('AuthRequestPasswordComponent', () => {
  let component: AuthRequestPasswordComponent;
  let fixture: ComponentFixture<AuthRequestPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRequestPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRequestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
