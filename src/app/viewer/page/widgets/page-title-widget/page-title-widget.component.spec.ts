import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleWidgetComponent } from './page-title-widget.component';

describe('PageTitleWidgetComponent', () => {
  let component: PageTitleWidgetComponent;
  let fixture: ComponentFixture<PageTitleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
