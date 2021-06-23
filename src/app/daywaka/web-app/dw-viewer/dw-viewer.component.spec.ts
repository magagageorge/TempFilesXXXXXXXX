import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwViewerComponent } from './dw-viewer.component';

describe('DwViewerComponent', () => {
  let component: DwViewerComponent;
  let fixture: ComponentFixture<DwViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
