import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatMenuTriggerDirective } from '../../directives/ngx-mat-menu-trigger.directive';
import { NgxMatPopoverComponent } from './ngx-mat-popover.component';

describe('NgxMatPopoverComponent', () => {
  let component: NgxMatPopoverComponent;
  let fixture: ComponentFixture<NgxMatPopoverComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [NgxMatPopoverComponent, NgxMatMenuTriggerDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
