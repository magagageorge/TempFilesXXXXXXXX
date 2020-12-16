import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwWelcomePageComponent } from './dw-welcome-page.component';

describe('DwWelcomePageComponent', () => {
  let component: DwWelcomePageComponent;
  let fixture: ComponentFixture<DwWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
