import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTextRightColumnViewComponent } from './ad-text-right-column-view.component';

describe('AdTextRightColumnViewComponent', () => {
  let component: AdTextRightColumnViewComponent;
  let fixture: ComponentFixture<AdTextRightColumnViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTextRightColumnViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTextRightColumnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
