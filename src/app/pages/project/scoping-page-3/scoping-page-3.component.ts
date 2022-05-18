import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-scoping-page-3',
	templateUrl: './scoping-page-3.component.html',
	styleUrls: ['./scoping-page-3.component.scss']
})
export class ScopingPage3Component implements OnInit {
	selectedModule: string = "Record to Report";
	MODIFIER: number = 1;
	margin: number = 0.4;
	currentArea: string = "Record to Report";
	HOURS_CONSTANT: number = 120;
	ERP_MODIFIER: number = 0;
	RPH_MODIFIER: number = 1;
	RATE_CARD: Object = {
		P: 500,
		D: 400,
		M: 350,
		SA: 275,
		A: 200,
		KGS: 50
	};

	RESOURCING_DATA: Array<Object> = [
		{
			title: "Engagement Partner",
			level: "P",
			fte: 0.25,
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
	kgs_guy: Object =
		{
			title: "Offshore Support",
			level: "KGS",
			fte: 5,
			allocation: 0,
			active: true
		}

	lead_guy: Object =
		{
			title: "Lead",
			level: "M",
			fte: 1,
			allocation: 0,
			active: true
		}

	PRICING_DATA: Array<Object> = [
		{
			process: "Functional",
			fees: 0.5,
			margin: 0.4,
			erp: 0.2,
			rph: 250
		},
		{
			process: "Technical",
			fees: (1/3),
			margin: 0.42,
			erp: 0.21,
			rph: 263
		},
		{
			process: "Governance",
			fees: (1/6),
			margin: 0.43,
			erp: 0.2,
			rph: 267
		}
	];

	pricingColumns: Array<string> = ["process", "fees", "margin", "erp", "rph"];
	columns: Array<string> = ["title", "estimated_hours", "allocation"]
	displayColumns: Object = {
		title: "Resource Title",
		level: "Level",
		fte: "FTE",
		estimated_hours: "Estimated Hours",
		allocation: "Allocation %"
	}

	pricingDisplayColumns: Object = {
		process: "Process Area",
		fees: "Billable Fees",
		margin: "Margin %",
		erp: "ERP %",
		rph: "Average RPH"
	}

	modules: Array<string> = ["Record to Report", "Procure to Pay", "Order to Cash", "Acquire to Retire", "Project Management", "Security and Controls", "Tax", "Change Management"];

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

	calculateTotalHours(): number {
		let hours = 0;

		for (let i = 0; i < this.RESOURCING_DATA.length; i++) {
			hours += this.RESOURCING_DATA[i]["fte"] * this.HOURS_CONSTANT * this.MODIFIER;
		}

		return hours;
	}

	calculateTotalCost(): number {
		let cost = 0;

		for (let i = 0; i < this.RESOURCING_DATA.length; i++) {
			cost += this.RESOURCING_DATA[i]["fte"] * this.HOURS_CONSTANT * this.MODIFIER * this.RATE_CARD[this.RESOURCING_DATA[i]["level"]];
		}

		return cost;
	}

	calculateTotalFees(): number {
		let total = 0;

		for (let i = 0; i < this.PRICING_DATA.length; i++) {
			total += this.PRICING_DATA[i]["fees"];
		}

		return total;
	}


	calculateAverageMetric(metric: string): number {
		let total = 0;

		for (let i = 0; i < this.PRICING_DATA.length; i++) {
			if(metric == "erp") {
				total += this.ERP_MODIFIER;
				total += this.PRICING_DATA[i][metric];
			}
			else if(metric == "rph")
				total += this.PRICING_DATA[i][metric] * this.RPH_MODIFIER;
			else
				total += this.PRICING_DATA[i][metric];
		}

		return total / this.PRICING_DATA.length;
	}

	updateModifier(event: any, amount: number) {
		if (event.checked)
			this.MODIFIER += amount;
		else
			this.MODIFIER -= amount;
	}

	updateKGS(event: any) {
		if (event.checked) {
			this.RESOURCING_DATA[7]["fte"] += 2;
			this.RESOURCING_DATA[8]["fte"] += 2;
			this.margin += 0.02;
			this.ERP_MODIFIER += 0.02;
			this.RPH_MODIFIER -= 0.03;
		}
		else {
			this.RESOURCING_DATA[7]["fte"] -= 2;
			this.RESOURCING_DATA[8]["fte"] -= 2;
			this.margin -= 0.02;
			this.ERP_MODIFIER -= 0.02;
			this.RPH_MODIFIER += 0.03;
		}
	}

	updateLead(event: any) {
		if (event.checked) {
			this.RESOURCING_DATA[2]["fte"] = 0.75;
			this.RESOURCING_DATA[3]["fte"] = 1;
			this.margin -= 0.01;
			this.ERP_MODIFIER -= 0.01;
			this.RPH_MODIFIER += 0.01;
		}
		else {
			this.RESOURCING_DATA[2]["fte"] = 0.75;
			this.RESOURCING_DATA[3]["fte"] = 0;
			this.margin += 0.01;
			this.ERP_MODIFIER += 0.01;
			this.RPH_MODIFIER -= 0.01;
		}
	}


	updatePartner(event: any) {
		if (event.checked) {
			this.RESOURCING_DATA[0]["fte"] += 0.25;
			this.margin -= 0.01;
			this.ERP_MODIFIER -= 0.02;
			this.RPH_MODIFIER += 0.02;
		}
		else {
			this.RESOURCING_DATA[0]["fte"] -= 0.25;
			this.margin += 0.01;
			this.ERP_MODIFIER += 0.02;
			this.RPH_MODIFIER -= 0.01;
		}
	}

	setArea(area: string): void {
		this.currentArea = area;
	}
}
