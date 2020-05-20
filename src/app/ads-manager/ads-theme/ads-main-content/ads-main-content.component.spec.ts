import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsMainContentComponent } from './ads-main-content.component';

describe('AdsMainContentComponent', () => {
  let component: AdsMainContentComponent;
  let fixture: ComponentFixture<AdsMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
