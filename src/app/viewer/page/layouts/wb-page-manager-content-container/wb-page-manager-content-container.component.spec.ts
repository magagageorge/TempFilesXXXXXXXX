import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageManagerContentContainerComponent } from './wb-page-manager-content-container.component';

describe('WbPageManagerContentContainerComponent', () => {
  let component: WbPageManagerContentContainerComponent;
  let fixture: ComponentFixture<WbPageManagerContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageManagerContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageManagerContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
