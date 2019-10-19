import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsLeftWidgetComponent } from './notifications-left-widget.component';

describe('NotificationsLeftWidgetComponent', () => {
  let component: NotificationsLeftWidgetComponent;
  let fixture: ComponentFixture<NotificationsLeftWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsLeftWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsLeftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
