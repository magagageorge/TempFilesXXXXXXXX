import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompaignLeftComponent } from './edit-compaign-left.component';

describe('EditCompaignLeftComponent', () => {
  let component: EditCompaignLeftComponent;
  let fixture: ComponentFixture<EditCompaignLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompaignLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompaignLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
