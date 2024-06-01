// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { JwtAuthService } from '../services/jwt-auth.service';

// @Injectable({
// 	providedIn: 'root'
// })
// export class AnimeGuardGuard {
// 	constructor(private _jwtAuthService: JwtAuthService, private _router: Router) {}
// 	canActivate(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot
// 	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// 		console.log('**CanActivate*');
// 		const isLoggedIn = this._jwtAuthService.isLoggedIn();
// 		if (!isLoggedIn) {
// 			void this._router.navigateByUrl('/login');
// 		}
// 		return isLoggedIn;
// 	}
// }

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtAuthService } from '../services/jwt-auth.service';

export const AnimeGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	console.log('**CanActivate*');
	const _jwtAuthService = inject(JwtAuthService);
	const _router = inject(Router);
	const isLoggedIn = _jwtAuthService.isLoggedIn();
	if (!isLoggedIn) {
		void _router.navigateByUrl('/login');
	}
	return isLoggedIn;
};
