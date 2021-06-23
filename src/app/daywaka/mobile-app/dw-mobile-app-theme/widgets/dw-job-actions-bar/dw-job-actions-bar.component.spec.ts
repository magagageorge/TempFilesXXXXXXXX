import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwJobActionsBarComponent } from './dw-job-actions-bar.component';

describe('DwJobActionsBarComponent', () => {
  let component: DwJobActionsBarComponent;
  let fixture: ComponentFixture<DwJobActionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwJobActionsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwJobActionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
