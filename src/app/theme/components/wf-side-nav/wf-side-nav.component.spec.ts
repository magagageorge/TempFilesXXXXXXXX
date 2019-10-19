import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSideNavComponent } from './wf-side-nav.component';

describe('WfSideNavComponent', () => {
  let component: WfSideNavComponent;
  let fixture: ComponentFixture<WfSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
