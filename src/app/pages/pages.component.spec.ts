import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoorbiPagesComponent } from './pages.component';

describe('WoorbiPagesComponent', () => {
  let component: WoorbiPagesComponent;
  let fixture: ComponentFixture<WoorbiPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoorbiPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoorbiPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
