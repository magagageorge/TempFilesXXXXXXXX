import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCommentModalComponent } from './delete-comment-modal.component';

describe('DeleteCommentModalComponent', () => {
  let component: DeleteCommentModalComponent;
  let fixture: ComponentFixture<DeleteCommentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCommentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
