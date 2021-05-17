import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsByListWidgetComponent } from './jobs-by-list-widget.component';

describe('JobsByListWidgetComponent', () => {
  let component: JobsByListWidgetComponent;
  let fixture: ComponentFixture<JobsByListWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsByListWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsByListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
