import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',  
        "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]
})
export class DashboardComponent implements OnInit {

    constructor(public router: Router) 
    { 
        this.router = router;
    }

    ngOnInit() 
    {
    }

}
