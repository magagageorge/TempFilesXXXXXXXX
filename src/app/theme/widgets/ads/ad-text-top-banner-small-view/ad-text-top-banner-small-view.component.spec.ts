import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTextTopBannerSmallViewComponent } from './ad-text-top-banner-small-view.component';

describe('AdTextTopBannerSmallViewComponent', () => {
  let component: AdTextTopBannerSmallViewComponent;
  let fixture: ComponentFixture<AdTextTopBannerSmallViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTextTopBannerSmallViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTextTopBannerSmallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
