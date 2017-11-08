import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-route-c',
  templateUrl: './route-c.component.html',
  styleUrls: ['./route-c.component.css']
})
export class RouteCComponent implements OnInit {

  protected params: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.params = this.route.params;
  }

  ngOnInit() {
  }

}
