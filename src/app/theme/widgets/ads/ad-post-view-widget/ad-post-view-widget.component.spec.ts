import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdPostWidgetComponent } from './ad-post-view-widget.component';

describe('ViewAdPostWidgetComponent', () => {
  let component: ViewAdPostWidgetComponent;
  let fixture: ComponentFixture<ViewAdPostWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdPostWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
