import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEmpoloyerJobScheduleListItemWidgetComponent } from './dw-empoloyer-job-schedule-list-item-widget.component';

describe('DwEmpoloyerJobScheduleListItemWidgetComponent', () => {
  let component: DwEmpoloyerJobScheduleListItemWidgetComponent;
  let fixture: ComponentFixture<DwEmpoloyerJobScheduleListItemWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEmpoloyerJobScheduleListItemWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEmpoloyerJobScheduleListItemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
