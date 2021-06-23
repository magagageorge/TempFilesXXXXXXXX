import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMobileLoginComponent } from './dw-mobile-login.component';

describe('DwMobileLoginComponent', () => {
  let component: DwMobileLoginComponent;
  let fixture: ComponentFixture<DwMobileLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMobileLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMobileLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
