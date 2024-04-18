import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedProjectComponent } from './detailed-project/detailed-project.component';

const routes: Routes = [
  { path: 'create-project', component: DetailedProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
