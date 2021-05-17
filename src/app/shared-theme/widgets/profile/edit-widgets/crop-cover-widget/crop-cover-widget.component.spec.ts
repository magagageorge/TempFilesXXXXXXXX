import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCoverWidgetComponent } from './crop-cover-widget.component';

describe('CropCoverWidgetComponent', () => {
  let component: CropCoverWidgetComponent;
  let fixture: ComponentFixture<CropCoverWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCoverWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCoverWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
