import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Material Angular Components
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';


// Import this page's components
import { SummaryPageComponentModule } from './pages/project/summary-page/summary-page.module';
import { ResourcingPageComponentModule } from './pages/project/resourcing-page/resourcing-page.module';
import { ScopingPageComponentModule } from './pages/project/scoping-page/scoping-page.module';
import { PricingPageComponentModule } from './pages/project/pricing-page/pricing-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    SummaryPageComponentModule,
    ResourcingPageComponentModule,
    ScopingPageComponentModule,
    PricingPageComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
