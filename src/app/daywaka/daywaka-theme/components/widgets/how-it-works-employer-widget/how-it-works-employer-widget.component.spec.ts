import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksEmployerWidgetComponent } from './how-it-works-employer-widget.component';

describe('HowItWorksEmployerWidgetComponent', () => {
  let component: HowItWorksEmployerWidgetComponent;
  let fixture: ComponentFixture<HowItWorksEmployerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksEmployerWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksEmployerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
