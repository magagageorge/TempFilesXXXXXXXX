import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotificationWidgetComponent } from './page-notification-widget.component';

describe('PageNotificationWidgetComponent', () => {
  let component: PageNotificationWidgetComponent;
  let fixture: ComponentFixture<PageNotificationWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotificationWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotificationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
