import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingNewPostWidgetComponent } from './loading-new-post-widget.component';

describe('LoadingNewPostWidgetComponent', () => {
  let component: LoadingNewPostWidgetComponent;
  let fixture: ComponentFixture<LoadingNewPostWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingNewPostWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingNewPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
