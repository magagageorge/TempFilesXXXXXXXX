import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPostCatalogWidgetComponent } from './ad-post-catalog-widget.component';

describe('AdPostCatalogWidgetComponent', () => {
  let component: AdPostCatalogWidgetComponent;
  let fixture: ComponentFixture<AdPostCatalogWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPostCatalogWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPostCatalogWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
