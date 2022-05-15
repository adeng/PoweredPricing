import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScopingPageComponent } from "./scoping-page.component";

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatGridListModule,
        MatCheckboxModule,
        MatTabsModule
    ],
    declarations: [ScopingPageComponent]
})
export class ScopingPageComponentModule { }