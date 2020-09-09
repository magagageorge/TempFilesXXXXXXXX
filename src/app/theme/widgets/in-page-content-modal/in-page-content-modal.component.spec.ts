import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPageContentModalComponent } from './in-page-content-modal.component';

describe('InPageContentModalComponent', () => {
  let component: InPageContentModalComponent;
  let fixture: ComponentFixture<InPageContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPageContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPageContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
