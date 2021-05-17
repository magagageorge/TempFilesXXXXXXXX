import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsByMapWidgetComponent } from './jobs-by-map-widget.component';

describe('JobsByMapWidgetComponent', () => {
  let component: JobsByMapWidgetComponent;
  let fixture: ComponentFixture<JobsByMapWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsByMapWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsByMapWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
