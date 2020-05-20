import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdAccountFormModalComponent } from './create-ad-account-form-modal.component';

describe('CreateAdAccountFormModalComponent', () => {
  let component: CreateAdAccountFormModalComponent;
  let fixture: ComponentFixture<CreateAdAccountFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdAccountFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdAccountFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
