import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SummaryPageComponent } from "./summary-page.component";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule} from '@angular/material/menu';
import { MatProgressBarModule, MatSnackBarModule, MatButtonModule } from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatMenuModule,
        MatProgressBarModule,
        BrowserModule,
        MatButtonModule,MatSnackBarModule,
        ReactiveFormsModule
    ],
    declarations: [SummaryPageComponent]
})
export class SummaryPageComponentModule 
{ 
    
}


