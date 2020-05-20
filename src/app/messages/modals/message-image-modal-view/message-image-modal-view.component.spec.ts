import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageImageModalViewComponent } from './message-image-modal-view.component';

describe('MessageImageModalViewComponent', () => {
  let component: MessageImageModalViewComponent;
  let fixture: ComponentFixture<MessageImageModalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageImageModalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageImageModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
