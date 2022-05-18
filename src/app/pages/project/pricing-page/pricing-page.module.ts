import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PricingPageComponent } from "./pricing-page.component";

import { MatIconModule, MatProgressBarModule, MatTableModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule, MatButtonModule } from "@angular/material";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatTableModule,
        MatSlideToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [PricingPageComponent]
})
export class PricingPageComponentModule {}