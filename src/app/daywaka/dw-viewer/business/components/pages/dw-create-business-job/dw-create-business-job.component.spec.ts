import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwCreateBusinessJobComponent } from './dw-create-business-job.component';

describe('DwCreateBusinessJobComponent', () => {
  let component: DwCreateBusinessJobComponent;
  let fixture: ComponentFixture<DwCreateBusinessJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwCreateBusinessJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwCreateBusinessJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
