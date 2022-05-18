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
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatProgressBarModule } from "@angular/material";
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
        MatStepperModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatTableModule,
        MatSlideToggleModule
    ],
    declarations: [ScopingPagev2Component],
    providers: [
        {
          provide: STEPPER_GLOBAL_OPTIONS,
          useValue: { showError: true }
        }
      ]
})
export class ScopingPagev2ComponentModule { }
