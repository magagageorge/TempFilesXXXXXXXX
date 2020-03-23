import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMessengerContentModalComponent } from './report-messenger-content-modal.component';

describe('ReportMessengerContentModalComponent', () => {
  let component: ReportMessengerContentModalComponent;
  let fixture: ComponentFixture<ReportMessengerContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMessengerContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMessengerContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
