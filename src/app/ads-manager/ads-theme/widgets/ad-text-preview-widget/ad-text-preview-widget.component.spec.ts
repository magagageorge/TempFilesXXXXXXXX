import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTextPreviewWidgetComponent } from './ad-text-preview-widget.component';

describe('AdTextPreviewWidgetComponent', () => {
  let component: AdTextPreviewWidgetComponent;
  let fixture: ComponentFixture<AdTextPreviewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTextPreviewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTextPreviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
