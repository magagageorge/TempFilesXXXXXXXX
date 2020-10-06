import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpPagesMainContentContainerComponent } from './wp-pages-main-content-container.component';

describe('WpPagesMainContentContainerComponent', () => {
  let component: WpPagesMainContentContainerComponent;
  let fixture: ComponentFixture<WpPagesMainContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpPagesMainContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpPagesMainContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
