import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPostPreviewWidgetComponent } from './ad-post-preview-widget.component';

describe('AdPostPreviewWidgetComponent', () => {
  let component: AdPostPreviewWidgetComponent;
  let fixture: ComponentFixture<AdPostPreviewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPostPreviewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPostPreviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
