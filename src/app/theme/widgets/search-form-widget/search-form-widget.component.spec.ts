import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormWidgetComponent } from './search-form-widget.component';

describe('SearchFormWidgetComponent', () => {
  let component: SearchFormWidgetComponent;
  let fixture: ComponentFixture<SearchFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
