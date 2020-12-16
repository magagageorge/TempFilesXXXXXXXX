import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeOneWidgetComponent } from './welcome-one-widget.component';

describe('WelcomeOneWidgetComponent', () => {
  let component: WelcomeOneWidgetComponent;
  let fixture: ComponentFixture<WelcomeOneWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeOneWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeOneWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
