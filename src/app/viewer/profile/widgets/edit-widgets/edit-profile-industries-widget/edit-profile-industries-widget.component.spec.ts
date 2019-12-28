import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileIndustriesWidgetComponent } from './edit-profile-industries-widget.component';

describe('EditProfileIndustriesWidgetComponent', () => {
  let component: EditProfileIndustriesWidgetComponent;
  let fixture: ComponentFixture<EditProfileIndustriesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileIndustriesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileIndustriesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
