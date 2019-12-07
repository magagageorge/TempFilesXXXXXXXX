import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropAvatarWidgetComponent } from './crop-avatar-widget.component';

describe('CropAvatarWidgetComponent', () => {
  let component: CropAvatarWidgetComponent;
  let fixture: ComponentFixture<CropAvatarWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropAvatarWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropAvatarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
