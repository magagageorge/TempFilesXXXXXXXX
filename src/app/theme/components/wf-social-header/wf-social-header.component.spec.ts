import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSocialHeaderComponent } from './wf-social-header.component';

describe('WfSocialHeaderComponent', () => {
  let component: WfSocialHeaderComponent;
  let fixture: ComponentFixture<WfSocialHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfSocialHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfSocialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
