import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageOverlayContainerComponent } from './edit-page-overlay-container.component';

describe('EditPageOverlayContainerComponent', () => {
  let component: EditPageOverlayContainerComponent;
  let fixture: ComponentFixture<EditPageOverlayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPageOverlayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageOverlayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
