import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMobileAppRegisterComponent } from './auth-mobile-app-register.component';

describe('AuthMobileAppRegisterComponent', () => {
  let component: AuthMobileAppRegisterComponent;
  let fixture: ComponentFixture<AuthMobileAppRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthMobileAppRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMobileAppRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
