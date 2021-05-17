import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbDateTimePickerListComponent } from './wb-date-time-picker-list.component';

describe('WbDateTimePickerListComponent', () => {
  let component: WbDateTimePickerListComponent;
  let fixture: ComponentFixture<WbDateTimePickerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbDateTimePickerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WbDateTimePickerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
