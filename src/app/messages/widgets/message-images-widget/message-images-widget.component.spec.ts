import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageImagesWidgetComponent } from './message-images-widget.component';

describe('MessageImagesWidgetComponent', () => {
  let component: MessageImagesWidgetComponent;
  let fixture: ComponentFixture<MessageImagesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageImagesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageImagesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
