import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteContentModalComponent } from './confirm-delete-content-modal.component';

describe('ConfirmDeleteContentModalComponent', () => {
  let component: ConfirmDeleteContentModalComponent;
  let fixture: ComponentFixture<ConfirmDeleteContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
