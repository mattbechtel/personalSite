import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path : "",
        component : DashboardComponent,
        children : [
            {
                path : "projects",
                component : ProjectsComponent
            },
            {
                path : "resume",
                component : ResumeComponent
            }
        ]
    }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
