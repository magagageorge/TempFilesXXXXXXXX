import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEditBusinessJobComponent } from './dw-edit-business-job.component';

describe('DwEditBusinessJobComponent', () => {
  let component: DwEditBusinessJobComponent;
  let fixture: ComponentFixture<DwEditBusinessJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEditBusinessJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEditBusinessJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
