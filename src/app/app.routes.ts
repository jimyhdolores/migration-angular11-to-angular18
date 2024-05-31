import { Routes } from '@angular/router';
import { AnimeGuardGuardCanLoad } from './commons/guards/anime-guard-candload.guard';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';

export const APP_ROUTES: Routes = [
	{
		path: 'login',
		component: LoginPageComponent
	},
	{
		path: 'register',
		loadComponent: () =>
			import('./pages/auth/register-page/register-page.component').then((c) => c.RegisterPageComponent)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/page.module').then((m) => m.PageModule),
		canLoad: [AnimeGuardGuardCanLoad]
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'prefix'
	}
];
