import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwAcceptJobModalComponent } from './dw-accept-job-modal.component';

describe('DwAcceptJobModalComponent', () => {
  let component: DwAcceptJobModalComponent;
  let fixture: ComponentFixture<DwAcceptJobModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwAcceptJobModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwAcceptJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
