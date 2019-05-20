import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatPopoverComponent } from './ngx-mat-popover.component';

describe('NgxMatPopoverComponent', () => {
  let component: NgxMatPopoverComponent;
  let fixture: ComponentFixture<NgxMatPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatPopoverComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
