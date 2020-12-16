import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwCreatePageModalComponent } from './dw-create-page-modal.component';

describe('DwCreatePageModalComponent', () => {
  let component: DwCreatePageModalComponent;
  let fixture: ComponentFixture<DwCreatePageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwCreatePageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwCreatePageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
