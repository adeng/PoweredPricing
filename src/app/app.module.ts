import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Material Angular Components
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

// Import this page's components
import { SummaryPageComponentModule } from './pages/project/summary-page/summary-page.module';
import { ResourcingPageComponentModule } from './pages/project/resourcing-page/resourcing-page.module';
import { ScopingPageComponentModule } from './pages/project/scoping-page/scoping-page.module';
import { PricingPageComponentModule } from './pages/project/pricing-page/pricing-page.module';
import { ScopingPagev2ComponentModule } from './pages/project/scoping-pagev2/scoping-pagev2.module';
import { MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    SummaryPageComponentModule,
    ResourcingPageComponentModule,
    ScopingPageComponentModule,
    ScopingPagev2ComponentModule,
    PricingPageComponentModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
