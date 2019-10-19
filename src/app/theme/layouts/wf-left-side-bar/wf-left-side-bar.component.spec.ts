import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfLeftSideBarComponent } from './wf-left-side-bar.component';

describe('WfLeftSideBarComponent', () => {
  let component: WfLeftSideBarComponent;
  let fixture: ComponentFixture<WfLeftSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfLeftSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
