import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopWatchComponent } from './Modules/stop-watch/stop-watch.component';
import { DragDropComponent } from './Modules/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    StopWatchComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
