import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileOverlayContainerComponent } from './delete-profile-overlay-container.component';

describe('DeleteProfileOverlayContainerComponent', () => {
  let component: DeleteProfileOverlayContainerComponent;
  let fixture: ComponentFixture<DeleteProfileOverlayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProfileOverlayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfileOverlayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
