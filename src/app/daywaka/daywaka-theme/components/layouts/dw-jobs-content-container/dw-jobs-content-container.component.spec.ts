import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwJobsContentContainerComponent } from './dw-jobs-content-container.component';

describe('DwJobsContentContainerComponent', () => {
  let component: DwJobsContentContainerComponent;
  let fixture: ComponentFixture<DwJobsContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwJobsContentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwJobsContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
