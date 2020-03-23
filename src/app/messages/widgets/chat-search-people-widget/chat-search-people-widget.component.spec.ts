import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSearchPeopleWidgetComponent } from './chat-search-people-widget.component';

describe('ChatSearchPeopleWidgetComponent', () => {
  let component: ChatSearchPeopleWidgetComponent;
  let fixture: ComponentFixture<ChatSearchPeopleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSearchPeopleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSearchPeopleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
