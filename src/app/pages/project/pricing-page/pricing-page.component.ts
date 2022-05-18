import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Component({
    selector: 'app-pricing-page',
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {
    
    PRICING_DATA: Array<Object> = [
        {
            process: "Functional",
            fees: 200000,
            margin: 0.4,
            erp: 0.2,
            rph: 250
        },
        {
            process: "Technical",
            fees: 200000,
            margin: 0.42,
            erp: 0.21,
            rph: 263
        },
        {
            process: "Governance",
            fees: 200000,
            margin: 0.43,
            erp: 0.2,
            rph: 267
        }
    ];

    columns: Array<string> = ["process", "fees", "margin", "erp", "rph"]
    displayColumns: Object = {
        process: "Process Area",
        fees: "Billable Fees",
        margin: "Margin %",
        erp: "ERP %",
        rph: "Average RPH"
    }

    constructor(public snackBar: MatSnackBar) { }
    openSnackBar(message: string, action: string) 
    {
        this.snackBar.open(message, action, {
           duration: 70000,
        });
     }

    ngOnInit() {
    }

    calculateTotalFees(): number {
        let total = 0;

        for(let i = 0; i < this.PRICING_DATA.length; i++) {
            total += this.PRICING_DATA[i]["fees"];
        }

        return total;
    }

    
    calculateAverageMetric(metric: string): number {
        let total = 0;

        for(let i = 0; i < this.PRICING_DATA.length; i++) {
            total += this.PRICING_DATA[i][metric];
        }

        return total / this.PRICING_DATA.length;
    }

    
}
