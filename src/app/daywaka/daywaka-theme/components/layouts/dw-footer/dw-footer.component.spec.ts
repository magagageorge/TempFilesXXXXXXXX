import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFooterComponent } from './dw-footer.component';

describe('DwFooterComponent', () => {
  let component: DwFooterComponent;
  let fixture: ComponentFixture<DwFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
