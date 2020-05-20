import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLinkViewWidgetComponent } from './message-link-view-widget.component';

describe('MessageLinkViewWidgetComponent', () => {
  let component: MessageLinkViewWidgetComponent;
  let fixture: ComponentFixture<MessageLinkViewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLinkViewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLinkViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
