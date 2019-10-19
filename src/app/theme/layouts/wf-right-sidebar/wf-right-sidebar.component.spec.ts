import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfRightSidebarComponent } from './wf-right-sidebar.component';

describe('WfRightSidebarComponent', () => {
  let component: WfRightSidebarComponent;
  let fixture: ComponentFixture<WfRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
