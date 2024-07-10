// import {
// 	HttpErrorResponse,
// 	HttpEvent,
// 	HttpHandler,
// 	HttpInterceptor,
// 	HttpInterceptorFn,
// 	HttpRequest
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { MessageService } from '../services/message.service';
// import { PathRest } from './../static/path-rest';
// @Injectable()
// export class AnimeInterceptor implements HttpInterceptor {
// 	constructor(private messageService: MessageService) {}

// 	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
// 		const token = localStorage.getItem('acces_token')!;
// 		let requestClone = req;

// 		if (!this.isLogin(req.url)) {
// 			requestClone = req.clone({
// 				headers: req.headers.set('Authorization', `Bearer ${token}`)
// 			});
// 		}

// 		return next.handle(requestClone).pipe(catchError((error) => this.herrorHandler(error)));
// 	}

// 	private isLogin(url: string): boolean {
// 		return url.search(PathRest.GET_LOGIN) != -1;
// 	}

// 	private herrorHandler(error: HttpErrorResponse): Observable<never> {
// 		if (error instanceof HttpErrorResponse) {
// 			if (error.error instanceof ErrorEvent) {
// 				this.messageService.showError('ERROR DE CLIENTE', 'top right');
// 			} else {
// 				if (error.status === 401) {
// 					this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
// 				} else {
// 					this.messageService.showError('ERROR DE SERVIDOR', 'top right');
// 				}
// 			}
// 		} else {
// 			this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
// 		}
// 		return throwError(error);
// 	}
// }

import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { PathRest } from '../static/path-rest';

export const AnimeInterceptorFn: HttpInterceptorFn = (req, next) => {
	const messageService = inject(MessageService);
	const token = localStorage.getItem('acces_token')!;
	let requestClone = req;

	if (!isLogin(req.url)) {
		requestClone = req.clone({
			headers: req.headers.set('Authorization', `Bearer ${token}`)
		});
	}

	return next(requestClone).pipe(catchError((error) => herrorHandler(error, messageService)));
};

const isLogin = (url: string): boolean => {
	return url.search(PathRest.GET_LOGIN) != -1;
};

const herrorHandler = (
	error: HttpErrorResponse,
	messageService: MessageService
): Observable<never> => {
	// const messageService = inject(MessageService);

	if (error instanceof HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			messageService.showError('ERROR DE CLIENTE', 'top right');
		} else {
			if (error.status === 401) {
				messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
			} else {
				messageService.showError('ERROR DE SERVIDOR', 'top right');
			}
		}
	} else {
		messageService.showError('OTRO TIPO DE ERROR', 'top right');
	}
	return throwError(error);
};
