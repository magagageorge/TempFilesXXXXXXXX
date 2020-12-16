import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksSeekerWidgetComponent } from './how-it-works-seeker-widget.component';

describe('HowItWorksSeekerWidgetComponent', () => {
  let component: HowItWorksSeekerWidgetComponent;
  let fixture: ComponentFixture<HowItWorksSeekerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksSeekerWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksSeekerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
