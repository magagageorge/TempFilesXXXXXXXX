import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwJobsComponent } from './dw-jobs.component';

describe('DwJobsComponent', () => {
  let component: DwJobsComponent;
  let fixture: ComponentFixture<DwJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
