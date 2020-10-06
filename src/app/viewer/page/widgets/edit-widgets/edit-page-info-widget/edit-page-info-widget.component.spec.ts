import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageInfoWidgetComponent } from './edit-page-info-widget.component';

describe('EditPageInfoWidgetComponent', () => {
  let component: EditPageInfoWidgetComponent;
  let fixture: ComponentFixture<EditPageInfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPageInfoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
