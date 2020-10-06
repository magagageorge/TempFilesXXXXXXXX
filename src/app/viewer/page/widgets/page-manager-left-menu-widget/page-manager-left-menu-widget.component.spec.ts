import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManagerLeftMenuWidgetComponent } from './page-manager-left-menu-widget.component';

describe('PageManagerLeftMenuWidgetComponent', () => {
  let component: PageManagerLeftMenuWidgetComponent;
  let fixture: ComponentFixture<PageManagerLeftMenuWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageManagerLeftMenuWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManagerLeftMenuWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
