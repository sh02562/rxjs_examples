import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopWatchComponent } from './Modules/stop-watch/stop-watch.component';
import { DragDropComponent } from './Modules/drag-drop/drag-drop.component';
<<<<<<< HEAD
=======
import { LoadingBarsComponent } from './Modules/loading-bars/loading-bars.component';
>>>>>>> loading bars, memory leak bug

@NgModule({
  declarations: [
    AppComponent,
    StopWatchComponent,
<<<<<<< HEAD
    DragDropComponent
=======
    DragDropComponent,
    LoadingBarsComponent
>>>>>>> loading bars, memory leak bug
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
