import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManagerTopMenuWidgetComponent } from './page-manager-top-menu-widget.component';

describe('PageManagerTopMenuWidgetComponent', () => {
  let component: PageManagerTopMenuWidgetComponent;
  let fixture: ComponentFixture<PageManagerTopMenuWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageManagerTopMenuWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManagerTopMenuWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
