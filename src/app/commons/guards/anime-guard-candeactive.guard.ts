import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import MedabotsComponent from '../../pages/dashboard/medabots/medabots.component';
import { IDeactiveComponent } from './../models/animes';

@Injectable({
	providedIn: 'root'
})
export class AnimeGuardGuardCanDeactive  {
	canDeactivate(
		component: IDeactiveComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return component.canExit();
	}
}
