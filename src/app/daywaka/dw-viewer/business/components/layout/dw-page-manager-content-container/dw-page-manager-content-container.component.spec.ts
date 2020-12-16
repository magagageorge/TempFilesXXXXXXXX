import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwPageManagerContentContainerComponent } from './dw-page-manager-content-container.component';

describe('DwPageManagerContentContainerComponent', () => {
  let component: DwPageManagerContentContainerComponent;
  let fixture: ComponentFixture<DwPageManagerContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwPageManagerContentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwPageManagerContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
