import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoverOptionsWidgetComponent } from './edit-cover-options-widget.component';

describe('EditCoverOptionsWidgetComponent', () => {
  let component: EditCoverOptionsWidgetComponent;
  let fixture: ComponentFixture<EditCoverOptionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoverOptionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoverOptionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
