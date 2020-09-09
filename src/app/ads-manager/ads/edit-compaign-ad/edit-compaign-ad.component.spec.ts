import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompaignAdComponent } from './edit-compaign-ad.component';

describe('EditCompaignAdComponent', () => {
  let component: EditCompaignAdComponent;
  let fixture: ComponentFixture<EditCompaignAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompaignAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompaignAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
