import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConnectionModalComponent } from './delete-connection-modal.component';

describe('DeleteConnectionModalComponent', () => {
  let component: DeleteConnectionModalComponent;
  let fixture: ComponentFixture<DeleteConnectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConnectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConnectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
