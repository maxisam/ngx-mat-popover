import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatMenuTrigger, MenuPositionX, MenuPositionY } from '@angular/material';

@Component({
  selector: 'ngx-mat-popover',
  templateUrl: './ngx-mat-popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ngxMatPopover'
})
export class NgxMatPopoverComponent {
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() popoverContent: TemplateRef<any>;
  @ViewChild(MatMenuTrigger) private matMenuTrigger: MatMenuTrigger;
  // for outside call
  open() {
    this.matMenuTrigger.openMenu();
  }

  close() {
    this.matMenuTrigger.closeMenu();
  }
}
