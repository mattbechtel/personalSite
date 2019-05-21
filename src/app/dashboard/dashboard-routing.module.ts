import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path : "",
        component : DashboardComponent,
        children : [
            {
                path : "projects",
                loadChildren : "./projects/projects.module#ProjectsModule"
            }
        ]
    }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
