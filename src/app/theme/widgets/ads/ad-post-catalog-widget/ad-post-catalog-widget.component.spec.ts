import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdPostCatalogWidgetComponent } from './ad-post-catalog-widget.component';

describe('ViewAdPostCatalogWidgetComponent', () => {
  let component: ViewAdPostCatalogWidgetComponent;
  let fixture: ComponentFixture<ViewAdPostCatalogWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdPostCatalogWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdPostCatalogWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
