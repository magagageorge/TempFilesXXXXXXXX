import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfHashtagPreviewComponent } from './wf-hashtag-preview.component';

describe('WfHashtagPreviewComponent', () => {
  let component: WfHashtagPreviewComponent;
  let fixture: ComponentFixture<WfHashtagPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfHashtagPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfHashtagPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
