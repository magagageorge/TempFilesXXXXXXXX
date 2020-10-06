import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageContentRoutingComponent } from './wb-page-content-routing.component';

describe('WbPageContentRoutingComponent', () => {
  let component: WbPageContentRoutingComponent;
  let fixture: ComponentFixture<WbPageContentRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageContentRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageContentRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
