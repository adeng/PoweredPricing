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
import { ScopingPageComponent } from './pages/project/scoping-page/scoping-page.component';
import { ResourcingPageComponent } from './pages/project/resourcing-page/resourcing-page.component';
import { PricingPageComponent } from './pages/project/pricing-page/pricing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScopingPageComponent,
    ResourcingPageComponent,
    PricingPageComponent
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
    SummaryPageComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
