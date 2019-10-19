import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPostWidgetComponent } from './loading-post-widget.component';

describe('LoadingPostWidgetComponent', () => {
  let component: LoadingPostWidgetComponent;
  let fixture: ComponentFixture<LoadingPostWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingPostWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
