import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaywakaComponent } from './daywaka.component';

describe('DaywakaComponent', () => {
  let component: DaywakaComponent;
  let fixture: ComponentFixture<DaywakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaywakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaywakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
