import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSeekerWidgetComponent } from './welcome-seeker-widget.component';

describe('WelcomeSeekerWidgetComponent', () => {
  let component: WelcomeSeekerWidgetComponent;
  let fixture: ComponentFixture<WelcomeSeekerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSeekerWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSeekerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
