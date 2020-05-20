import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNavBarComponent } from './ads-nav-bar.component';

describe('AdsNavBarComponent', () => {
  let component: AdsNavBarComponent;
  let fixture: ComponentFixture<AdsNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
