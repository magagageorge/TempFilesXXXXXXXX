import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageMessageButtonComponent } from './wb-page-message-button.component';

describe('WbPageMessageButtonComponent', () => {
  let component: WbPageMessageButtonComponent;
  let fixture: ComponentFixture<WbPageMessageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageMessageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageMessageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
