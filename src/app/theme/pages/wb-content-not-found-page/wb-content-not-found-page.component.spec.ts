import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbContentNotFoundPageComponent } from './wb-content-not-found-page.component';

describe('WbContentNotFoundPageComponent', () => {
  let component: WbContentNotFoundPageComponent;
  let fixture: ComponentFixture<WbContentNotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbContentNotFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbContentNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
