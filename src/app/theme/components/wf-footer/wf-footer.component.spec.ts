import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfFooterComponent } from './wf-footer.component';

describe('WfFooterComponent', () => {
  let component: WfFooterComponent;
  let fixture: ComponentFixture<WfFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
