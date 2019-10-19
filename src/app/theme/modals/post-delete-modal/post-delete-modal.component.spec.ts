import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeleteModalComponent } from './post-delete-modal.component';

describe('PostDeleteModalComponent', () => {
  let component: PostDeleteModalComponent;
  let fixture: ComponentFixture<PostDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
