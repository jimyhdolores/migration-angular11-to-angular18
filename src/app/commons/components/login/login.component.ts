import { JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { BasicFormModule } from '../../module/basic-form.module';
import { AuthService } from '../../services/auth.service';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { IRQLogin } from './../../models/auth';

@Component({
	standalone: true,
	imports: [BasicFormModule, JsonPipe, RouterLinkActive],
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class LoginComponent {
	@ViewChild('myFormLogin') myFormLogin: NgForm | undefined;
	constructor(
		private _router: Router,
		private _loginService: AuthService,
		private _jwtAuthService: JwtAuthService
	) {}

	dataLoginForm = {
		userName: 'maria',
		password: '123'
	};

	clickLogin(): void {
		const user: IRQLogin = {
			username: this.dataLoginForm.userName,
			password: this.dataLoginForm.password
		};
		this._loginService.login(user).subscribe((data) => {
			this._jwtAuthService.login(data.accessToken);
			void this._router.navigateByUrl('/dashboard');
		});
	}

	onClickRegister(): void {
		/**
		 * En caso no desees hacer el "ruteo" con codigo entonces usar
		 *  [routerLink]="['/register']"
		 */
		void this._router.navigateByUrl('/register');
	}
}
