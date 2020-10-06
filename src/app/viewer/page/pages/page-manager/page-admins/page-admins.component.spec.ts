import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminsComponent } from './page-admins.component';

describe('PageAdminsComponent', () => {
  let component: PageAdminsComponent;
  let fixture: ComponentFixture<PageAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
