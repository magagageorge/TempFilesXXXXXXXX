import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadWidgetComponent } from './chat-thread-widget.component';

describe('ChatThreadWidgetComponent', () => {
  let component: ChatThreadWidgetComponent;
  let fixture: ComponentFixture<ChatThreadWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatThreadWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThreadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
