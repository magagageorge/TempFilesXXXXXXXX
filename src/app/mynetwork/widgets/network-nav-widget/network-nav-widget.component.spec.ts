import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkNavWidgetComponent } from './network-nav-widget.component';

describe('NetworkNavWidgetComponent', () => {
  let component: NetworkNavWidgetComponent;
  let fixture: ComponentFixture<NetworkNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
