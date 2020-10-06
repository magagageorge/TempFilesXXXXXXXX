import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageGeneralSettingsComponent } from './wb-page-general-settings.component';

describe('WbPageGeneralSettingsComponent', () => {
  let component: WbPageGeneralSettingsComponent;
  let fixture: ComponentFixture<WbPageGeneralSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageGeneralSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageGeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
