import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScopingPageComponent } from "./scoping-page.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ScopingPageComponent]
})
export class ScopingPageComponentModule {}