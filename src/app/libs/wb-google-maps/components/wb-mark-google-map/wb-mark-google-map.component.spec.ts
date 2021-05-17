import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbMarkGoogleMapComponent } from './wb-mark-google-map.component';

describe('WbMarkGoogleMapComponent', () => {
  let component: WbMarkGoogleMapComponent;
  let fixture: ComponentFixture<WbMarkGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbMarkGoogleMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WbMarkGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
