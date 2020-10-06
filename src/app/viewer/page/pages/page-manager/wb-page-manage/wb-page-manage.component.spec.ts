import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPageManageComponent } from './wb-page-manage.component';

describe('WbPageManageComponent', () => {
  let component: WbPageManageComponent;
  let fixture: ComponentFixture<WbPageManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbPageManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbPageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
