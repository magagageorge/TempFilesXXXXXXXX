import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldingCubeComponent } from './folding-cube.component';

describe('FoldingCubeComponent', () => {
  let component: FoldingCubeComponent;
  let fixture: ComponentFixture<FoldingCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldingCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldingCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
