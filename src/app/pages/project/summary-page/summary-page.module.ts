import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SummaryPageComponent } from "./summary-page.component";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatExpansionModule
    ],
    declarations: [SummaryPageComponent]
})
export class SummaryPageComponentModule { }