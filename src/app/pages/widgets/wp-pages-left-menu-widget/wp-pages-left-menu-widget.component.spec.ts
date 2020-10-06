import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpPagesLeftMenuWidgetComponent } from './wp-pages-left-menu-widget.component';

describe('WpPagesLeftMenuWidgetComponent', () => {
  let component: WpPagesLeftMenuWidgetComponent;
  let fixture: ComponentFixture<WpPagesLeftMenuWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpPagesLeftMenuWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpPagesLeftMenuWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
