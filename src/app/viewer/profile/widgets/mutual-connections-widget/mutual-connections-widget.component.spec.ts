import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualConnectionsWidgetComponent } from './mutual-connections-widget.component';

describe('MutualConnectionsWidgetComponent', () => {
  let component: MutualConnectionsWidgetComponent;
  let fixture: ComponentFixture<MutualConnectionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualConnectionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualConnectionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
