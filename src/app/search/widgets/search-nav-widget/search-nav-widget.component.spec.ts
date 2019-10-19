import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavWidgetComponent } from './search-nav-widget.component';

describe('SearchNavWidgetComponent', () => {
  let component: SearchNavWidgetComponent;
  let fixture: ComponentFixture<SearchNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
