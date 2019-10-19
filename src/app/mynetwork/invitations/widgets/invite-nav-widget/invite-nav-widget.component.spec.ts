import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteNavWidgetComponent } from './invite-nav-widget.component';

describe('InviteNavWidgetComponent', () => {
  let component: InviteNavWidgetComponent;
  let fixture: ComponentFixture<InviteNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
