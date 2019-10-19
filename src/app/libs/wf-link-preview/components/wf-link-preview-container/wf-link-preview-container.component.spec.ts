import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfLinkPreviewContainerComponent } from './wf-link-preview-container.component';

describe('WfLinkPreviewContainerComponent', () => {
  let component: WfLinkPreviewContainerComponent;
  let fixture: ComponentFixture<WfLinkPreviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfLinkPreviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfLinkPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
