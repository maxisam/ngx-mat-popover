import { Directive, Input } from '@angular/core';
import { MatMenuPanel, MatMenuTrigger } from '@angular/material/menu';

@Directive({
  selector: `[ngxMatMenuTriggerFor]`,
  exportAs: 'ngxMatMenuTrigger'
})
export class NgxMatMenuTriggerDirective extends _MatMenuTriggerBase {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override _handleClick(event: MouseEvent): void {
    // Nothing to do
  }

  @Input('ngxMatMenuTriggerFor')
  override get menu(): MatMenuPanel {
    return super.menu;
  }

  override set menu(menu: MatMenuPanel) {
    super.menu = menu;
  }
}
