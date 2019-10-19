import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfNavbarSummaryComponent } from './wf-navbar-summary.component';

describe('WfNavbarSummaryComponent', () => {
  let component: WfNavbarSummaryComponent;
  let fixture: ComponentFixture<WfNavbarSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfNavbarSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfNavbarSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
