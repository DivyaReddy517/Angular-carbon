import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SupportComponent } from './pages/support/support.component';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./starter-home/starter-home.module').then(m => m.StarterHomeModule)
	},
	{
		path: 'catalog',
		component: CatalogComponent
	},
	{
		path: 'docs',
		component: DocsComponent
	},
	{
		path: 'support',
		component: SupportComponent
	},
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
