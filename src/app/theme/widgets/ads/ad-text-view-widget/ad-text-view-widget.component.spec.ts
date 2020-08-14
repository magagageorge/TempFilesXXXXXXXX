import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdTextWidgetComponent } from './ad-text-view-widget.component';

describe('ViewAdTextWidgetComponent', () => {
  let component: ViewAdTextWidgetComponent;
  let fixture: ComponentFixture<ViewAdTextWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdTextWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdTextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
