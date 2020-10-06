import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageNotificationsComponent } from './wb-page-notifications.component';

describe('WbPageNotificationsComponent', () => {
  let component: WbPageNotificationsComponent;
  let fixture: ComponentFixture<WbPageNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
