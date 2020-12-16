import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmployerWidgetComponent } from './welcome-employer-widget.component';

describe('WelcomeEmployerWidgetComponent', () => {
  let component: WelcomeEmployerWidgetComponent;
  let fixture: ComponentFixture<WelcomeEmployerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEmployerWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeEmployerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
