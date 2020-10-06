import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCardWidgetComponent } from './page-list-card-widget.component';

describe('PageListCardWidgetComponent', () => {
  let component: PageListCardWidgetComponent;
  let fixture: ComponentFixture<PageListCardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListCardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListCardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
