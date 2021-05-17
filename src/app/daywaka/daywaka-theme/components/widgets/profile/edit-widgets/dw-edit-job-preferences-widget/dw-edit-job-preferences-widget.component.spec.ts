import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEditJobPreferencesWidgetComponent } from './dw-edit-job-preferences-widget.component';

describe('DwEditJobPreferencesWidgetComponent', () => {
  let component: DwEditJobPreferencesWidgetComponent;
  let fixture: ComponentFixture<DwEditJobPreferencesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEditJobPreferencesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEditJobPreferencesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
