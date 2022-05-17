import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResourcingPageComponent } from "./resourcing-page.component";

import { MatProgressBarModule, MatTableModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatSlideToggleModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
    ],
    declarations: [ResourcingPageComponent]
})
export class ResourcingPageComponentModule { }