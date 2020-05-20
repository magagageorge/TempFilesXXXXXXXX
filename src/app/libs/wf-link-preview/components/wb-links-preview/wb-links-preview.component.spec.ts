import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbLinksPreviewComponent } from './wb-links-preview.component';

describe('WbLinksPreviewComponent', () => {
  let component: WbLinksPreviewComponent;
  let fixture: ComponentFixture<WbLinksPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbLinksPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbLinksPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
