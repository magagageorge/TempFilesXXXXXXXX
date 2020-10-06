import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPagesListWidgetComponent } from './my-pages-list-widget.component';

describe('MyPagesListWidgetComponent', () => {
  let component: MyPagesListWidgetComponent;
  let fixture: ComponentFixture<MyPagesListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPagesListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPagesListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
