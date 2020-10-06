import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageCoverOptionsWidgetComponent } from './edit-page-cover-options-widget.component';

describe('EditPageCoverOptionsWidgetComponent', () => {
  let component: EditPageCoverOptionsWidgetComponent;
  let fixture: ComponentFixture<EditPageCoverOptionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPageCoverOptionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageCoverOptionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
