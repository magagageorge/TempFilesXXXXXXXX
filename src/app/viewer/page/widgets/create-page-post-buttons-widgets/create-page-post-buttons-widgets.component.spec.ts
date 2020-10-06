import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePagePostButtonsWidgetsComponent } from './create-page-post-buttons-widgets.component';

describe('CreatePagePostButtonsWidgetsComponent', () => {
  let component: CreatePagePostButtonsWidgetsComponent;
  let fixture: ComponentFixture<CreatePagePostButtonsWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePagePostButtonsWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePagePostButtonsWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
