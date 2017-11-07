import { Component, OnInit } from '@angular/core';
import { MatChipSelectionChange } from "@angular/material";

@Component({
  selector: 'app-cool-dev-main',
  templateUrl: './cool-dev-main.component.html',
  styleUrls: ['./cool-dev-main.component.css']
})
export class CoolDevMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Event) {
    console.log("debugging...");
  }

}
