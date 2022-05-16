import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScopingPagev2Component } from "./scoping-pagev2.component";

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatGridListModule,
        MatCheckboxModule,
        MatTabsModule,
        MatSliderModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule
    ],
    declarations: [ScopingPagev2Component]
})
export class ScopingPagev2ComponentModule { }