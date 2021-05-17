import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBusinessPageComponent } from './new-business-page.component';

describe('NewBusinessPageComponent', () => {
  let component: NewBusinessPageComponent;
  let fixture: ComponentFixture<NewBusinessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBusinessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBusinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
