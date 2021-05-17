import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileEducationWidgetComponent } from './delete-profile-education-widget.component';

describe('DeleteProfileEducationWidgetComponent', () => {
  let component: DeleteProfileEducationWidgetComponent;
  let fixture: ComponentFixture<DeleteProfileEducationWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProfileEducationWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfileEducationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
