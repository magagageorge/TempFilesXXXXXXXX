import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFindWorkersComponent } from './dw-find-workers.component';

describe('DwFindWorkersComponent', () => {
  let component: DwFindWorkersComponent;
  let fixture: ComponentFixture<DwFindWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwFindWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFindWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
