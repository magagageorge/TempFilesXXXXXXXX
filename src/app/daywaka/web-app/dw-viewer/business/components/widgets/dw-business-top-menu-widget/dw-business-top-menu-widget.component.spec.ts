import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBusinessTopMenuWidgetComponent } from './dw-business-top-menu-widget.component';

describe('DwBusinessTopMenuWidgetComponent', () => {
  let component: DwBusinessTopMenuWidgetComponent;
  let fixture: ComponentFixture<DwBusinessTopMenuWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwBusinessTopMenuWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBusinessTopMenuWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
