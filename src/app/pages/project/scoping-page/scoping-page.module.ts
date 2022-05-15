import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScopingPageComponent } from "./scoping-page.component";

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatGridListModule,
        MatCheckboxModule,
        MatTabsModule,
        MatSliderModule,
        MatInputModule,
        MatFormFieldModule
    ],
    declarations: [ScopingPageComponent]
})
export class ScopingPageComponentModule { }