import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverlayPostFormComponent } from './mobile-overlay-post-form.component';

describe('MobileOverlayPostFormComponent', () => {
  let component: MobileOverlayPostFormComponent;
  let fixture: ComponentFixture<MobileOverlayPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverlayPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverlayPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
