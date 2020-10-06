import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePhotosSummaryWidgetComponent } from './page-photos-summary-widget.component';

describe('PagePhotosSummaryWidgetComponent', () => {
  let component: PagePhotosSummaryWidgetComponent;
  let fixture: ComponentFixture<PagePhotosSummaryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotosSummaryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePhotosSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
