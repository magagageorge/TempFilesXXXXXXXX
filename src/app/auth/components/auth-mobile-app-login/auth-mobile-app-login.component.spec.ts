import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMobileAppLoginComponent } from './auth-mobile-app-login.component';

describe('AuthMobileAppLoginComponent', () => {
  let component: AuthMobileAppLoginComponent;
  let fixture: ComponentFixture<AuthMobileAppLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthMobileAppLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMobileAppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
