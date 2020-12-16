import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBussinessDashboardComponent } from './dw-bussiness-dashboard.component';

describe('DwBussinessDashboardComponent', () => {
  let component: DwBussinessDashboardComponent;
  let fixture: ComponentFixture<DwBussinessDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwBussinessDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBussinessDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
