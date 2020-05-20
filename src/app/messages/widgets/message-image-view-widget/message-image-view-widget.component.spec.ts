import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageImageViewWidgetComponent } from './message-image-view-widget.component';

describe('MessageImageViewWidgetComponent', () => {
  let component: MessageImageViewWidgetComponent;
  let fixture: ComponentFixture<MessageImageViewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageImageViewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageImageViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
