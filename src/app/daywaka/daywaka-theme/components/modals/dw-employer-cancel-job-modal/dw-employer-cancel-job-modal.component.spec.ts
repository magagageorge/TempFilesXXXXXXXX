import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEmployerCancelJobModalComponent } from './dw-employer-cancel-job-modal.component';

describe('DwEmployerCancelJobModalComponent', () => {
  let component: DwEmployerCancelJobModalComponent;
  let fixture: ComponentFixture<DwEmployerCancelJobModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEmployerCancelJobModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEmployerCancelJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
