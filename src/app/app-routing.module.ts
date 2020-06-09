import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopWatchComponent } from './Modules/stop-watch/stop-watch.component';
import { DragDropComponent } from './Modules/drag-drop/drag-drop.component';


const routes: Routes = [
  {path: '', redirectTo:'stop-watch', pathMatch:'full'}, 
  {path: 'stop-watch', component:StopWatchComponent },
  {path: 'drag-drop', component:DragDropComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
