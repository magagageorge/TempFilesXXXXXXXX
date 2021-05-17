import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEmployerDeleteJobModalComponent } from './dw-employer-delete-job-modal.component';

describe('DwEmployerDeleteJobModalComponent', () => {
  let component: DwEmployerDeleteJobModalComponent;
  let fixture: ComponentFixture<DwEmployerDeleteJobModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEmployerDeleteJobModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEmployerDeleteJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
