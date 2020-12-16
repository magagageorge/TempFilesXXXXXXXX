import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBusinessJobsComponent } from './dw-business-jobs.component';

describe('DwBusinessJobsComponent', () => {
  let component: DwBusinessJobsComponent;
  let fixture: ComponentFixture<DwBusinessJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwBusinessJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBusinessJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
