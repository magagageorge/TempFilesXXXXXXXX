import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBusinessComponent } from './business.component';

describe('DwBusinessComponent', () => {
  let component: DwBusinessComponent;
  let fixture: ComponentFixture<DwBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
