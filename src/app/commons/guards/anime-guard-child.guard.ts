// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { JwtAuthService } from '../services/jwt-auth.service';
// import { MessageService } from './../services/message.service';

// @Injectable({
// 	providedIn: 'root'
// })
// export class AnimeGuardGuardChild  {
// 	constructor(private _jwtAuthService: JwtAuthService, private _messageService: MessageService) {}
// 	canActivateChild(
// 		childRoute: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot
// 	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
// 		const path = childRoute.routeConfig?.path;
// 		if (path === 'medabots' && !this._jwtAuthService.isAdmin()) {
// 			this._messageService.showError(
// 				'No cuenta con permisos suficientes para poder ingresar',
// 				'top right'
// 			);
// 			return false;
// 		}
// 		return true;
// 	}
// }

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn } from '@angular/router';
import { JwtAuthService } from '../services/jwt-auth.service';
import { MessageService } from '../services/message.service';

export const AnimeGuardGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot) => {
	const path = route.routeConfig?.path;
	const _jwtAuthService = inject(JwtAuthService);
	const _messageService = inject(MessageService);
	if (path === 'medabots' && !_jwtAuthService.isAdmin()) {
		_messageService.showError(
			'No cuenta con permisos suficientes para poder ingresar',
			'top right'
		);
		return false;
	}
	return true;
};
