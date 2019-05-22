import { Component, OnInit } from '@angular/core';
import { GithubHttpService } from 'src/app/shared/services/github-http.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    repos: Array<any>;
    reposLoaded: boolean;

    constructor(private githubHttpService: GithubHttpService) {
        this.githubHttpService = githubHttpService;
    }

    ngOnInit() {
        const res = this.githubHttpService.getRepos('mattbechtel');
        res.subscribe(this.handleRepoRes.bind(this));
    }

    handleRepoRes(res: any[]) {
        this.repos = res;

        if (this.repos[0] && this.repos[0].html_url) {
            this.reposLoaded = true;
        }
    }
}
