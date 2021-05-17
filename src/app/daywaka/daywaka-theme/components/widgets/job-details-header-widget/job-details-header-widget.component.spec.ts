import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsHeaderWidgetComponent } from './job-details-header-widget.component';

describe('JobDetailsHeaderWidgetComponent', () => {
  let component: JobDetailsHeaderWidgetComponent;
  let fixture: ComponentFixture<JobDetailsHeaderWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsHeaderWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsHeaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
