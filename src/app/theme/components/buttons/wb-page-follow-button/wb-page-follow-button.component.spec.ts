import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageFollowButtonComponent } from './wb-page-follow-button.component';

describe('WbPageFollowButtonComponent', () => {
  let component: WbPageFollowButtonComponent;
  let fixture: ComponentFixture<WbPageFollowButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageFollowButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageFollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
