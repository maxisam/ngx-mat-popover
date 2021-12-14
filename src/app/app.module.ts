import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatPopoverModule } from 'ngx-mat-popover';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatButtonToggleModule, NgxMatPopoverModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
