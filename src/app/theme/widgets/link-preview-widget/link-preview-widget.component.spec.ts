import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPreviewWidgetComponent } from './link-preview-widget.component';

describe('LinkPreviewWidgetComponent', () => {
  let component: LinkPreviewWidgetComponent;
  let fixture: ComponentFixture<LinkPreviewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkPreviewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPreviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
