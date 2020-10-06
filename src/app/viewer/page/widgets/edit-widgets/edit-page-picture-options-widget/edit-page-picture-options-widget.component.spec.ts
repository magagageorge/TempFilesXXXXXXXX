import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPagePictureOptionsWidgetComponent } from './edit-page-picture-options-widget.component';

describe('EditPagePictureOptionsWidgetComponent', () => {
  let component: EditPagePictureOptionsWidgetComponent;
  let fixture: ComponentFixture<EditPagePictureOptionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPagePictureOptionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPagePictureOptionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
