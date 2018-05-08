import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedUserlistComponent } from './connected-userlist.component';

describe('ConnectedUserlistComponent', () => {
  let component: ConnectedUserlistComponent;
  let fixture: ComponentFixture<ConnectedUserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedUserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
