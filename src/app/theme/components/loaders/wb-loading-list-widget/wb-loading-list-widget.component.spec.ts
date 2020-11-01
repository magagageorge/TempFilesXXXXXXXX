import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbLoadingListWidgetComponent } from './wb-loading-list-widget.component';

describe('WbLoadingListWidgetComponent', () => {
  let component: WbLoadingListWidgetComponent;
  let fixture: ComponentFixture<WbLoadingListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbLoadingListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbLoadingListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
