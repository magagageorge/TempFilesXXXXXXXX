import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardWidgetComponent } from './post-card-widget.component';

describe('PostCardWidgetComponent', () => {
  let component: PostCardWidgetComponent;
  let fixture: ComponentFixture<PostCardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
