import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopWatchComponent } from './Modules/stop-watch/stop-watch.component';
import { DragDropComponent } from './Modules/drag-drop/drag-drop.component';
import { LoadingBarsComponent } from './Modules/loading-bars/loading-bars.component';
import { LoadingBarsModule } from './Modules/loading-bars/loading-bars.module';
import { DragDropModule } from './Modules/drag-drop/drag-drop.module';


@NgModule({
  declarations: [
    AppComponent,
    StopWatchComponent,
    DragDropComponent,
    LoadingBarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
