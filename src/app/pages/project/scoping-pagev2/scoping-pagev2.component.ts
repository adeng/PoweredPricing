import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoping-pagev2',
  templateUrl: './scoping-pagev2.component.html',
  styleUrls: ['./scoping-pagev2.component.scss']
})
export class ScopingPagev2Component implements OnInit {

  currentArea: string = "Record to Report";

  constructor() { }

  ngOnInit() {
  }
  
  setArea(area: string): void {
		this.currentArea = area;
	}
}
