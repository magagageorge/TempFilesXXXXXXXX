import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwNavBarComponent } from './dw-nav-bar.component';

describe('DwNavBarComponent', () => {
  let component: DwNavBarComponent;
  let fixture: ComponentFixture<DwNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
