import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
