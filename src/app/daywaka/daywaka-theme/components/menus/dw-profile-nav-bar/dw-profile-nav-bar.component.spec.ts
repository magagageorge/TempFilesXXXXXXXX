import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwProfileNavBarComponent } from './dw-profile-nav-bar.component';

describe('DwProfileNavBarComponent', () => {
  let component: DwProfileNavBarComponent;
  let fixture: ComponentFixture<DwProfileNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwProfileNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwProfileNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
