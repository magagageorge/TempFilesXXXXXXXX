import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwBusinessContentRouterComponent } from './dw-business-content-router.component';

describe('DwBusinessContentRouterComponent', () => {
  let component: DwBusinessContentRouterComponent;
  let fixture: ComponentFixture<DwBusinessContentRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwBusinessContentRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwBusinessContentRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
