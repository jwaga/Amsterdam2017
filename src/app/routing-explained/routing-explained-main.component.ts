import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-explained-main',
  templateUrl: './routing-explained-main.component.html',
  styleUrls: ['./routing-explained-main.component.css']
})
export class RoutingExplainedMainComponent implements OnInit {

  protected id: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['routeC/' + this.id], {relativeTo: this.activatedRoute});
  }
}
