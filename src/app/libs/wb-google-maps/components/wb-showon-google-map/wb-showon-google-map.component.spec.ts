import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbShowonGoogleMapComponent } from './wb-showon-google-map.component';

describe('WbShowonGoogleMapComponent', () => {
  let component: WbShowonGoogleMapComponent;
  let fixture: ComponentFixture<WbShowonGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbShowonGoogleMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WbShowonGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
