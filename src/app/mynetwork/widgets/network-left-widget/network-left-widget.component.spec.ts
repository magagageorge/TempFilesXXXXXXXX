import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkLeftWidgetComponent } from './network-left-widget.component';

describe('NetworkLeftWidgetComponent', () => {
  let component: NetworkLeftWidgetComponent;
  let fixture: ComponentFixture<NetworkLeftWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkLeftWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLeftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
