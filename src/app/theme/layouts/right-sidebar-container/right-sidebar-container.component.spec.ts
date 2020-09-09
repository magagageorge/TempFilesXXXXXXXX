import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarContainerComponent } from './right-sidebar-container.component';

describe('RightSidebarContainerComponent', () => {
  let component: RightSidebarContainerComponent;
  let fixture: ComponentFixture<RightSidebarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSidebarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidebarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
