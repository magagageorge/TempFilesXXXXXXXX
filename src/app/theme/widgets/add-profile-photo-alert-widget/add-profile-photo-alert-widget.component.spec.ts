import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilePhotoAlertWidgetComponent } from './add-profile-photo-alert-widget.component';

describe('AddProfilePhotoAlertWidgetComponent', () => {
  let component: AddProfilePhotoAlertWidgetComponent;
  let fixture: ComponentFixture<AddProfilePhotoAlertWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfilePhotoAlertWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilePhotoAlertWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
