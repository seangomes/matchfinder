import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterchatComponent } from './filterchat.component';

describe('FilterchatComponent', () => {
  let component: FilterchatComponent;
  let fixture: ComponentFixture<FilterchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
