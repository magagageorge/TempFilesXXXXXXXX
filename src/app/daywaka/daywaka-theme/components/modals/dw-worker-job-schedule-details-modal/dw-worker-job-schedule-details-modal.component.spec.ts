import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwWorkerJobScheduleDetailsModalComponent } from './dw-worker-job-schedule-details-modal.component';

describe('DwWorkerJobScheduleDetailsModalComponent', () => {
  let component: DwWorkerJobScheduleDetailsModalComponent;
  let fixture: ComponentFixture<DwWorkerJobScheduleDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwWorkerJobScheduleDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwWorkerJobScheduleDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
