import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-scoping-page',
	templateUrl: './scoping-page.component.html',
	styleUrls: ['./scoping-page.component.scss']
})
export class ScopingPageComponent implements OnInit {

	currentArea: string = "Record to Report";

	constructor() { }

	ngOnInit() {
	}

	setArea(area: string): void {
		this.currentArea = area;
	}
}
