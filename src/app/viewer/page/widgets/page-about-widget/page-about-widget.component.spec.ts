import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutWidgetComponent } from './page-about-widget.component';

describe('PageAboutWidgetComponent', () => {
  let component: PageAboutWidgetComponent;
  let fixture: ComponentFixture<PageAboutWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAboutWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
