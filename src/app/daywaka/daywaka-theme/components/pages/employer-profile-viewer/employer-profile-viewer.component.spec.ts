import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProfileViewerComponent } from './employer-profile-viewer.component';

describe('EmployerProfileViewerComponent', () => {
  let component: EmployerProfileViewerComponent;
  let fixture: ComponentFixture<EmployerProfileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerProfileViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerProfileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
