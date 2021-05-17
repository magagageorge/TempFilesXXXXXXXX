import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvatarOptionsWidgetComponent } from './edit-avatar-options-widget.component';

describe('EditAvatarOptionsWidgetComponent', () => {
  let component: EditAvatarOptionsWidgetComponent;
  let fixture: ComponentFixture<EditAvatarOptionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAvatarOptionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvatarOptionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
