import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfNavbarComponent } from './wf-navbar.component';

describe('WfNavbarComponent', () => {
  let component: WfNavbarComponent;
  let fixture: ComponentFixture<WfNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
