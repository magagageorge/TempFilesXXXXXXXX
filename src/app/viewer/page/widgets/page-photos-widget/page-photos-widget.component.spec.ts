import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePhotosWidgetComponent } from './page-photos-widget.component';

describe('PagePhotosWidgetComponent', () => {
  let component: PagePhotosWidgetComponent;
  let fixture: ComponentFixture<PagePhotosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePhotosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
