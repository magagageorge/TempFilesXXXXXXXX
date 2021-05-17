import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedEditProfileLanguagesWidgetComponent } from './shared-edit-profile-languages-widget.component';

describe('SharedEditProfileLanguagesWidgetComponent', () => {
  let component: SharedEditProfileLanguagesWidgetComponent;
  let fixture: ComponentFixture<SharedEditProfileLanguagesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedEditProfileLanguagesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedEditProfileLanguagesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
