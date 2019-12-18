import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { CumulativeReflectionComponent } from './cumulative-reflection/cumulative-reflection.component';
import { EthicsEssayComponent } from './ethics-essay/ethics-essay.component';
import { GenEdReflectionComponent } from './gen-ed-reflection/gen-ed-reflection.component';

const routes: Routes = [
    {
        path : '',
        component : DashboardComponent,
        children : [
            {
                path: '/', 
                component: ProjectsComponent
            },
            {
                path : 'projects',
                component: ProjectsComponent
            }, 
            {
                path: 'cumulativeReflection',
                component: CumulativeReflectionComponent
            }, 
            {
                path: 'ethicsEssay',
                component: EthicsEssayComponent
            }, 
            {
                path: 'genEdReflection',
                component: GenEdReflectionComponent
            }, 
            {
                path: 'resume', 
                component: ResumeComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
