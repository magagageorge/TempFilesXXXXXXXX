import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMorePostTextWidgetComponent } from './show-more-post-text-widget.component';

describe('ShowMorePostTextWidgetComponent', () => {
  let component: ShowMorePostTextWidgetComponent;
  let fixture: ComponentFixture<ShowMorePostTextWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMorePostTextWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMorePostTextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
