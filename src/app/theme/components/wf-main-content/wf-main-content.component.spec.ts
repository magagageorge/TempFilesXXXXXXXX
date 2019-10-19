import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfMainContentComponent } from './wf-main-content.component';

describe('WfMainContentComponent', () => {
  let component: WfMainContentComponent;
  let fixture: ComponentFixture<WfMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
