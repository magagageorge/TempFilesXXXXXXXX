import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSearchFormWidgetComponent } from './mobile-search-form-widget.component';

describe('MobileSearchFormWidgetComponent', () => {
  let component: MobileSearchFormWidgetComponent;
  let fixture: ComponentFixture<MobileSearchFormWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSearchFormWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSearchFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
