import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPagePictureWidgetComponent } from './crop-page-picture-widget.component';

describe('CropPagePictureWidgetComponent', () => {
  let component: CropPagePictureWidgetComponent;
  let fixture: ComponentFixture<CropPagePictureWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropPagePictureWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropPagePictureWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
