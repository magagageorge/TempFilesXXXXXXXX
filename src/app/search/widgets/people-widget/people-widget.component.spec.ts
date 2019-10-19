import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleWidgetComponent } from './people-widget.component';

describe('PeopleWidgetComponent', () => {
  let component: PeopleWidgetComponent;
  let fixture: ComponentFixture<PeopleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
