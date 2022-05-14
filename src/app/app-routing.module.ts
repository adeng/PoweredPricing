import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PricingPageComponent } from './pages/project/pricing-page/pricing-page.component';
import { ResourcingPageComponent } from './pages/project/resourcing-page/resourcing-page.component';
import { ScopingPageComponent } from './pages/project/scoping-page/scoping-page.component';
import { SummaryPageComponent } from './pages/project/summary-page/summary-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/project/summary',
		pathMatch: 'full'
	},
	{
		path: 'project/summary',
		component: SummaryPageComponent
	},
	{
		path: 'project/scoping',
		component: ScopingPageComponent
	},
	{
		path: 'project/resourcing',
		component: ResourcingPageComponent
	},
	{
		path: 'project/pricing',
		component: PricingPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
