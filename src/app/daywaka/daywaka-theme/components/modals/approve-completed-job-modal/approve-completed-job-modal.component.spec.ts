import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCompletedJobModalComponent } from './approve-completed-job-modal.component';

describe('ApproveCompletedJobModalComponent', () => {
  let component: ApproveCompletedJobModalComponent;
  let fixture: ComponentFixture<ApproveCompletedJobModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveCompletedJobModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCompletedJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
