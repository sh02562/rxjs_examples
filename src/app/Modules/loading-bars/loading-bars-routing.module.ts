import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingBarsComponent } from './loading-bars.component';


const routes: Routes = [
  {
    path: '',
    component: LoadingBarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingBarsRoutingModule { }
