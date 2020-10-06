import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageMainContentComponent } from './wb-page-main-content.component';

describe('WbPageMainContentComponent', () => {
  let component: WbPageMainContentComponent;
  let fixture: ComponentFixture<WbPageMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
