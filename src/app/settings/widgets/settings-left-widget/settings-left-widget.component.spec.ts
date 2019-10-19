import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLeftWidgetComponent } from './settings-left-widget.component';

describe('SettingsLeftWidgetComponent', () => {
  let component: SettingsLeftWidgetComponent;
  let fixture: ComponentFixture<SettingsLeftWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLeftWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLeftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
