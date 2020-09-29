import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarpenterComponent } from './carpenter/carpenter.component';

const routes: Routes = [
  {path: '', component: CarpenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
