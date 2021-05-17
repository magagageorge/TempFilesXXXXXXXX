import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwProfileHeaderWidgetComponent } from './dw-profile-header-widget.component';

describe('DwProfileHeaderWidgetComponent', () => {
  let component: DwProfileHeaderWidgetComponent;
  let fixture: ComponentFixture<DwProfileHeaderWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwProfileHeaderWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwProfileHeaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
