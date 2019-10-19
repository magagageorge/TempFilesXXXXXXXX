import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplyDeleteModalComponent } from './comment-reply-delete-modal.component';

describe('CommentReplyDeleteModalComponent', () => {
  let component: CommentReplyDeleteModalComponent;
  let fixture: ComponentFixture<CommentReplyDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentReplyDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReplyDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
