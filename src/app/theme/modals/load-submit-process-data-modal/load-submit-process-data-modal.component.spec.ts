import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSubmitProcessDataModalComponent } from './load-submit-process-data-modal.component';

describe('LoadSubmitProcessDataModalComponent', () => {
  let component: LoadSubmitProcessDataModalComponent;
  let fixture: ComponentFixture<LoadSubmitProcessDataModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSubmitProcessDataModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSubmitProcessDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
