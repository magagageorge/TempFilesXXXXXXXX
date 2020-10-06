import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPageCoverWidgetComponent } from './crop-page-cover-widget.component';

describe('CropPageCoverWidgetComponent', () => {
  let component: CropPageCoverWidgetComponent;
  let fixture: ComponentFixture<CropPageCoverWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropPageCoverWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropPageCoverWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
