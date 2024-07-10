import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRLogin, IRQLogin } from './../models/auth';
import { PathRest } from './../static/path-rest';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private http: HttpClient,
		private messageService: MessageService
	) {}
	//CHIKIS EN EL VIDEO POR ERROR PUSE EL MISMO MODELO DE DATOS COMO "RESPUESTA" PERO DEBERIA SER "IRLogin", MIL DISCULPAS
	login(login: IRQLogin): Observable<IRLogin> {
		return this.http.post<IRLogin>(PathRest.GET_LOGIN, login);
	}

	/**
	 * Se esta comentando esta sección ya que ahora los errores se manejaran desde el Interceptor
	 */

	// herrorHandler(error: HttpErrorResponse): Observable<never> {
	// 	if (error instanceof HttpErrorResponse) {
	// 		if (error.error instanceof ErrorEvent) {
	// 			console.log('ERROR DE CLIENTE');
	// 			this.messageService.showError('ERROR DE CLIENTE', 'top right');
	// 		} else {
	// 			console.log('ERROR DE SERVIDOR');
	// 			console.log(error.status);
	// 			console.log(error.message);
	// 			if (error.status === 401) {
	// 				this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
	// 			} else {
	// 				this.messageService.showError('ERROR DE SERVIDOR', 'top right');
	// 			}
	// 		}
	// 	} else {
	// 		console.log('OTRO TIPO DE ERROR');
	// 		this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
	// 	}
	// 	return throwError(error);
	// }
}
