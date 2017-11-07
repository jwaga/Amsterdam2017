import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-components-community-main',
  templateUrl: './components-community-main.component.html',
  styleUrls: ['./components-community-main.component.css']
})
export class ComponentsCommunityMainComponent implements OnInit {

  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { country: 'Argentina', value: 'Argentina' },
    { country: 'Brazil', value: 'Brazil' },
    { country: 'Croatia', value: 'Croatia' },
    { country: 'Denmark', value: 'Denmark' },
    { country: 'France', value: 'France' },
    { country: 'Holland', value: 'Holland' },
    { country: 'Poland', value: 'Poland' },
    { country: 'United States', value: 'United States' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];
  protected pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'country', 'country');
  }

  ngOnInit() {
  }

}
