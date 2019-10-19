import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFeedCardWidgetComponent } from './simple-feed-card-widget.component';

describe('SimpleFeedCardWidgetComponent', () => {
  let component: SimpleFeedCardWidgetComponent;
  let fixture: ComponentFixture<SimpleFeedCardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFeedCardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFeedCardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
