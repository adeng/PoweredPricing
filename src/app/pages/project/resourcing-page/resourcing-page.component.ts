import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-resourcing-page',
	templateUrl: './resourcing-page.component.html',
	styleUrls: ['./resourcing-page.component.scss']
})
export class ResourcingPageComponent implements OnInit {

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
	columns: Array<string> = ["title", "level", "fte", "estimated_hours", "allocation", "override", "active"]
	displayColumns: Object = {
		title: "Resource Title",
		level: "Level",
		fte: "FTE",
		estimated_hours: "Estimated Hours",
		allocation: "% Allocation",
		override: "FTE Override",
		active: "Disable"
	}

	constructor() { }

	ngOnInit() {
	}

	calculateAllocation(resource: Object): number {
		let fteSum = 0;

		for(let i = 0; i < this.RESOURCING_DATA.length; i++) {
			if(!this.RESOURCING_DATA[i]["active"])
				continue;
				
			fteSum += this.RESOURCING_DATA[i]["fte"];
		}

		return resource["fte"]/fteSum;
	}

}
