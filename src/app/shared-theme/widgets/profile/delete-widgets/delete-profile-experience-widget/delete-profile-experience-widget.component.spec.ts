import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileExperienceWidgetComponent } from './delete-profile-experience-widget.component';

describe('DeleteProfileExperienceWidgetComponent', () => {
  let component: DeleteProfileExperienceWidgetComponent;
  let fixture: ComponentFixture<DeleteProfileExperienceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProfileExperienceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfileExperienceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
