import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwGlobalNavBarComponent } from './dw-global-nav-bar.component';

describe('DwGlobalNavBarComponent', () => {
  let component: DwGlobalNavBarComponent;
  let fixture: ComponentFixture<DwGlobalNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwGlobalNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwGlobalNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
