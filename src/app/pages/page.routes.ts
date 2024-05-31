import { Routes } from '@angular/router';
import { AnimeGuardGuardCanDeactive } from '../commons/guards/anime-guard-candeactive.guard';
import { AnimeGuardGuardChild } from '../commons/guards/anime-guard-child.guard';
import { AnimeGuardGuard } from '../commons/guards/anime-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';

export default [
	{
		path: '',
		component: DashboardComponent,
		canActivate: [AnimeGuardGuard],
		canActivateChild: [AnimeGuardGuardChild],
		children: [
			{
				path: 'pokemons',
				component: PokemonsComponent
			},
			{
				path: 'digimons',
				loadComponent: () => import('./dashboard/digimons/digimons.component'),
				canDeactivate: [AnimeGuardGuardCanDeactive]
			},
			{
				path: 'medabots',
				loadComponent: () => import('./dashboard/medabots/medabots.component')
			},
			{
				path: '',
				redirectTo: 'pokemons',
				pathMatch: 'full'
			}
		]
	}
] as Routes;
