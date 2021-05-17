import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEmployerBulkApproveCompletedJobsModalComponent } from './dw-employer-bulk-approve-completed-jobs-modal.component';

describe('DwEmployerBulkApproveCompletedJobsModalComponent', () => {
  let component: DwEmployerBulkApproveCompletedJobsModalComponent;
  let fixture: ComponentFixture<DwEmployerBulkApproveCompletedJobsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEmployerBulkApproveCompletedJobsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEmployerBulkApproveCompletedJobsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
