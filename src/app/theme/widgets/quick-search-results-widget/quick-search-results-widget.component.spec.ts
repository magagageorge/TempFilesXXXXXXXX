import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchResultsWidgetComponent } from './quick-search-results-widget.component';

describe('QuickSearchResultsWidgetComponent', () => {
  let component: QuickSearchResultsWidgetComponent;
  let fixture: ComponentFixture<QuickSearchResultsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchResultsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchResultsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
