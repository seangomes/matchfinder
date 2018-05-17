import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTabNavComponent } from './chat-tab-nav.component';

describe('ChatTabNavComponent', () => {
  let component: ChatTabNavComponent;
  let fixture: ComponentFixture<ChatTabNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTabNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
