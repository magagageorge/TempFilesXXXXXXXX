import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreviewWidgetComponent } from './ad-preview-widget.component';

describe('AdPreviewWidgetComponent', () => {
  let component: AdPreviewWidgetComponent;
  let fixture: ComponentFixture<AdPreviewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPreviewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPreviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
