import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormWidgetComponent } from './chat-form-widget.component';

describe('ChatFormWidgetComponent', () => {
  let component: ChatFormWidgetComponent;
  let fixture: ComponentFixture<ChatFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
