import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfNavbarEmptyComponent } from './wf-navbar-empty.component';

describe('WfNavbarEmptyComponent', () => {
  let component: WfNavbarEmptyComponent;
  let fixture: ComponentFixture<WfNavbarEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfNavbarEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfNavbarEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
