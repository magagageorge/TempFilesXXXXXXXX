import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPostWidgetComponent } from './shared-post-widget.component';

describe('SharedPostWidgetComponent', () => {
  let component: SharedPostWidgetComponent;
  let fixture: ComponentFixture<SharedPostWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedPostWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
