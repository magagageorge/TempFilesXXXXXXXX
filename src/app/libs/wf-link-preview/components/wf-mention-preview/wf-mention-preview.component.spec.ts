import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfMentionPreviewComponent } from './wf-mention-preview.component';

describe('WfMentionPreviewComponent', () => {
  let component: WfMentionPreviewComponent;
  let fixture: ComponentFixture<WfMentionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfMentionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfMentionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
