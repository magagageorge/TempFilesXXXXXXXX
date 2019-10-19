import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfLinkPreviewComponent } from './wf-link-preview.component';

describe('WfLinkPreviewComponent', () => {
  let component: WfLinkPreviewComponent;
  let fixture: ComponentFixture<WfLinkPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfLinkPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfLinkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
