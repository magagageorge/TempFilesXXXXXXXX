import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportContentModalComponent } from './report-content-modal.component';

describe('ReportContentModalComponent', () => {
  let component: ReportContentModalComponent;
  let fixture: ComponentFixture<ReportContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
