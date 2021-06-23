import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBussinesJobsWidgetComponent } from './dw-bussines-jobs-widget.component';

describe('DwBussinesJobsWidgetComponent', () => {
  let component: DwBussinesJobsWidgetComponent;
  let fixture: ComponentFixture<DwBussinesJobsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwBussinesJobsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBussinesJobsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
