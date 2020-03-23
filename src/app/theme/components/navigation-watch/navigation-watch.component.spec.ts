import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWatchComponent } from './navigation-watch.component';

describe('NavigationWatchComponent', () => {
  let component: NavigationWatchComponent;
  let fixture: ComponentFixture<NavigationWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
