import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbMessagesContentComponent } from './wb-messages-content.component';

describe('WbMessagesContentComponent', () => {
  let component: WbMessagesContentComponent;
  let fixture: ComponentFixture<WbMessagesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbMessagesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbMessagesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
