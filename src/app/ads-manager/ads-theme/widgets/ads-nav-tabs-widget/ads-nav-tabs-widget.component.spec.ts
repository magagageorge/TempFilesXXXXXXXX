import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNavTabsWidgetComponent } from './ads-nav-tabs-widget.component';

describe('AdsNavTabsWidgetComponent', () => {
  let component: AdsNavTabsWidgetComponent;
  let fixture: ComponentFixture<AdsNavTabsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsNavTabsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsNavTabsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
