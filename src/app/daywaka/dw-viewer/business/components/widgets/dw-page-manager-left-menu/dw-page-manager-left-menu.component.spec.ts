import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwPageManagerLeftMenuComponent } from './dw-page-manager-left-menu.component';

describe('DwPageManagerLeftMenuComponent', () => {
  let component: DwPageManagerLeftMenuComponent;
  let fixture: ComponentFixture<DwPageManagerLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwPageManagerLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwPageManagerLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
