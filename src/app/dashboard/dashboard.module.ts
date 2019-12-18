import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { CumulativeReflectionComponent } from './cumulative-reflection/cumulative-reflection.component';
import { GenEdReflectionComponent } from './gen-ed-reflection/gen-ed-reflection.component';
import { EthicsEssayComponent } from './ethics-essay/ethics-essay.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ResumeComponent,
        ProjectsComponent,
        CumulativeReflectionComponent,
        GenEdReflectionComponent,
        EthicsEssayComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
