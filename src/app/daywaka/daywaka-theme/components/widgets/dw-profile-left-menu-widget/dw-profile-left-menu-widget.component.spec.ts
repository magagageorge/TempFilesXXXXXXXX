import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwProfileLeftMenuWidgetComponent } from './dw-profile-left-menu-widget.component';

describe('DwProfileLeftMenuWidgetComponent', () => {
  let component: DwProfileLeftMenuWidgetComponent;
  let fixture: ComponentFixture<DwProfileLeftMenuWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwProfileLeftMenuWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwProfileLeftMenuWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
