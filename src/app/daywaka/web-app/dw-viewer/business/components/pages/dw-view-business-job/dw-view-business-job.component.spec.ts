import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwViewBusinessJobComponent } from './dw-view-business-job.component';

describe('DwViewBusinessJobComponent', () => {
  let component: DwViewBusinessJobComponent;
  let fixture: ComponentFixture<DwViewBusinessJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwViewBusinessJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwViewBusinessJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
