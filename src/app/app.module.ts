import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerService } from './timer.service';
import { MinutesFormatPipe } from './minutes-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MinutesFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
