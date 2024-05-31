import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';

export const APP_ROUTES: Routes = [
	{
		path: 'login',
		component: LoginPageComponent
	},
	{
		path: 'register',
		loadComponent: () => import('./pages/auth/register-page/register-page.component')
	},
	{
		path: 'dashboard',
		// loadChildren: () => import('./pages/page.module').then((m) => m.PageModule),
		loadChildren: () => import('./pages/page.routes')
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'prefix'
	}
];
