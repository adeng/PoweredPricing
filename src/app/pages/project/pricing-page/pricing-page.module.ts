import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PricingPageComponent } from "./pricing-page.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [PricingPageComponent]
})
export class PricingPageComponentModule {}