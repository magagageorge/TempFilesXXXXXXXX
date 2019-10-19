import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDealingWidgetComponent } from './profile-dealing-widget.component';

describe('ProfileDealingWidgetComponent', () => {
  let component: ProfileDealingWidgetComponent;
  let fixture: ComponentFixture<ProfileDealingWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDealingWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDealingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
