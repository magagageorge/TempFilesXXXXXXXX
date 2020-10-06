import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionsButtonsWidgetComponent } from './page-actions-buttons-widget.component';

describe('PageActionsButtonsWidgetComponent', () => {
  let component: PageActionsButtonsWidgetComponent;
  let fixture: ComponentFixture<PageActionsButtonsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActionsButtonsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActionsButtonsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
