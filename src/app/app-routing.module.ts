import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayCardioComponent } from './components/array-cardio/array-cardio.component';

const routes: Routes = [
  {path:'arrayCardio', component:ArrayCardioComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
