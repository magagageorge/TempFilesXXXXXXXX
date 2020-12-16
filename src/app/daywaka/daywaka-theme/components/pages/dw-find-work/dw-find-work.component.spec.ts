import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFindWorkComponent } from './dw-find-work.component';

describe('DwFindWorkComponent', () => {
  let component: DwFindWorkComponent;
  let fixture: ComponentFixture<DwFindWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwFindWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFindWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
