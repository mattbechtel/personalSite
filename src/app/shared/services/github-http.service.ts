import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GithubHttpService 
{
    constructor(public httpService: HttpClient) 
    { 
        this.httpService = httpService;
    }

    getRepos(username: string)
    {
        let githubApiUrl = `https://api.github.com/users/${username}/repos`;

        console.log(`Retrieving repositories @ ${githubApiUrl}`);
        return this.httpService.get<any>(githubApiUrl);
    }
}
