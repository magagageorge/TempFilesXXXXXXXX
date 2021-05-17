import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEmpoloyerJobListItemWidgetComponent } from './dw-empoloyer-job-list-item-widget.component';

describe('DwEmpoloyerJobListItemWidgetComponent', () => {
  let component: DwEmpoloyerJobListItemWidgetComponent;
  let fixture: ComponentFixture<DwEmpoloyerJobListItemWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEmpoloyerJobListItemWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEmpoloyerJobListItemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
