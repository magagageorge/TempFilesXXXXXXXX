import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSeekBusWidgetComponent } from './for-seek-bus-widget.component';

describe('ForSeekBusWidgetComponent', () => {
  let component: ForSeekBusWidgetComponent;
  let fixture: ComponentFixture<ForSeekBusWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForSeekBusWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSeekBusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
