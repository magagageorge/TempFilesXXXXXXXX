import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreTextWidgetComponent } from './show-more-text-widget.component';

describe('ShowMoreTextWidgetComponent', () => {
  let component: ShowMoreTextWidgetComponent;
  let fixture: ComponentFixture<ShowMoreTextWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMoreTextWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoreTextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
