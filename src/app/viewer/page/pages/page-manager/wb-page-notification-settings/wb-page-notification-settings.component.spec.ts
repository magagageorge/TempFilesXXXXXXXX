import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageNotificationSettingsComponent } from './wb-page-notification-settings.component';

describe('WbPageNotificationSettingsComponent', () => {
  let component: WbPageNotificationSettingsComponent;
  let fixture: ComponentFixture<WbPageNotificationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageNotificationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
