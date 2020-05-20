import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdContentFormWidgetComponent } from './ad-content-form-widget.component';

describe('AdContentFormWidgetComponent', () => {
  let component: AdContentFormWidgetComponent;
  let fixture: ComponentFixture<AdContentFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdContentFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdContentFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
