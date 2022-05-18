import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-scoping-page-3',
	templateUrl: './scoping-page-3.component.html',
	styleUrls: ['./scoping-page-3.component.scss']
})
export class ScopingPage3Component implements OnInit {

	currentArea: string = "Record to Report";
	HOURS_CONSTANT: number = 120;
	RESOURCING_DATA: Array<Object> = [
		{
			title: "Engagement Partner",
			level: "P",
			fte: 0.1,
			allocation: 0,
			active: true
		},
		{
			title: "Engagement Director",
			level: "D",
			fte: 0.2,
			allocation: 0,
			active: true
		},
		{
			title: "Technical Lead",
			level: "D",
			fte: 0.4,
			allocation: 0,
			active: true
		},
		{
			title: "Conversion Lead",
			level: "M",
			fte: 0.75,
			allocation: 0,
			active: true
		},
		{
			title: "Functional Lead",
			level: "M",
			fte: 1.0,
			allocation: 0,
			active: true
		},
		{
			title: "Security Lead",
			level: "D",
			fte: 0.25,
			allocation: 0,
			active: true
		},
		{
			title: "Reporting Lead",
			level: "M",
			fte: 1,
			allocation: 0,
			active: true
		},
		{
			title: "Functional Support",
			level: "SA",
			fte: 1.25,
			allocation: 0,
			active: true
		},
		{
			title: "Technical Support",
			level: "SA",
			fte: 2.25,
			allocation: 0,
			active: true
		}
	]
	columns: Array<string> = ["title", "estimated_hours", "allocation"]
	displayColumns: Object = {
		title: "Resource Title",
		level: "Level",
		fte: "FTE",
		estimated_hours: "Estimated Hours",
		allocation: "Allocation %"
	}

	modules: Array<string> = ["Record to Report", "Procure to Pay", "Order to Cash", "Acquire to Retire"];

	constructor() { }

	ngOnInit() {

	}

	calculateAllocation(resource: Object): number {
		let fteSum = 0;

		for (let i = 0; i < this.RESOURCING_DATA.length; i++) {
			if (!this.RESOURCING_DATA[i]["active"])
				continue;

			fteSum += this.RESOURCING_DATA[i]["fte"];
		}

		return resource["fte"] / fteSum;
	}

	setArea(area: string): void {
		this.currentArea = area;
	}
}
