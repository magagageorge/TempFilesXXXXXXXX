import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSitesComponent } from './social-sites.component';

describe('SocialSitesComponent', () => {
  let component: SocialSitesComponent;
  let fixture: ComponentFixture<SocialSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
