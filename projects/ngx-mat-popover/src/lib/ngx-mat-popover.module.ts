import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatPopoverComponent } from './components/ngx-mat-popover/ngx-mat-popover.component';
import { NgxMatMenuTriggerDirective } from './directives/ngx-mat-menu-trigger.directive';

@NgModule({
  imports: [CommonModule, MatMenuModule],
  declarations: [NgxMatMenuTriggerDirective, NgxMatPopoverComponent],
  exports: [NgxMatPopoverComponent]
})
export class NgxMatPopoverModule {}
