import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePostFormContainerWidgetComponent } from './share-post-form-container-widget.component';

describe('SharePostFormContainerWidgetComponent', () => {
  let component: SharePostFormContainerWidgetComponent;
  let fixture: ComponentFixture<SharePostFormContainerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePostFormContainerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePostFormContainerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
