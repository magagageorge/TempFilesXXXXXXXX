import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessUploadImagesProgressWidgetComponent } from './process-upload-images-progress-widget.component';

describe('ProcessUploadImagesProgressWidgetComponent', () => {
  let component: ProcessUploadImagesProgressWidgetComponent;
  let fixture: ComponentFixture<ProcessUploadImagesProgressWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessUploadImagesProgressWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessUploadImagesProgressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
