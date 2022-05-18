import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { PricingPageComponent } from './pages/project/pricing-page/pricing-page.component';
import { ResourcingPageComponent } from './pages/project/resourcing-page/resourcing-page.component';
import { ScopingPage3Component } from './pages/project/scoping-page-3/scoping-page-3.component';
import { ScopingPageComponent } from './pages/project/scoping-page/scoping-page.component';
import { ScopingPagev2Component } from './pages/project/scoping-pagev2/scoping-pagev2.component';
import { SummaryPageComponent } from './pages/project/summary-page/summary-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'project/summary',
		component: SummaryPageComponent
	},
	{
		path: 'project/scoping',
		component: ScopingPage3Component
	},
	{
		path: 'project/resourcing',
		component: ResourcingPageComponent
	},
	{
		path: 'project/pricing',
		component: PricingPageComponent
	},
	{
		path: 'project/scopingv2',
		component: ScopingPagev2Component
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
