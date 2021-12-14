import { Component, ViewChild } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { NgxMatPopoverComponent } from 'ngx-mat-popover';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('popover', { static: true })
  readonly popover!: NgxMatPopoverComponent;

  xPosition: MenuPositionX = 'after';
  yPosition: MenuPositionY = 'below';

  isConfirm = false;

  onClose(): void {
    this.isConfirm = false;
    this.popover.close();
  }

  onConfirm(): void {
    this.isConfirm = true;
    this.popover.close();
  }

  openPopover(): void {
    this.popover.open();
  }
}
