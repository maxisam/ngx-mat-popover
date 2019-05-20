import { Component, ViewChild } from '@angular/core';
import { NgxMatPopoverComponent } from 'ngx-mat-popover';

// import { NgxMatPopoverComponent } from 'projects/ngx-mat-popover/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isConfirm = false;
  @ViewChild('popover') popover: NgxMatPopoverComponent;
  constructor() {}
  onClose() {
    this.isConfirm = false;
    this.popover.close();
  }
  onConfirm() {
    this.isConfirm = true;
    this.popover.close();
  }
  openPopover() {
    this.popover.open();
  }
}
