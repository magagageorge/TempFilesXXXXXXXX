import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavWidgetComponent } from './page-nav-widget.component';

describe('PageNavWidgetComponent', () => {
  let component: PageNavWidgetComponent;
  let fixture: ComponentFixture<PageNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
