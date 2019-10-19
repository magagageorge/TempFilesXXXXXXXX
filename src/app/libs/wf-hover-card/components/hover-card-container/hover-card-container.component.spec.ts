import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverCardContainerComponent } from './hover-card-container.component';

describe('HoverCardContainerComponent', () => {
  let component: HoverCardContainerComponent;
  let fixture: ComponentFixture<HoverCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
