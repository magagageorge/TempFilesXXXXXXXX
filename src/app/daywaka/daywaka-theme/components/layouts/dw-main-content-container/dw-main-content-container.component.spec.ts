import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMainContentContainerComponent } from './dw-main-content-container.component';

describe('DwMainContentContainerComponent', () => {
  let component: DwMainContentContainerComponent;
  let fixture: ComponentFixture<DwMainContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMainContentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMainContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
