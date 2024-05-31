import { Component } from '@angular/core';
import { LoginComponent } from '../../../commons/components/login/login.component';

@Component({
	standalone: true,
	imports: [LoginComponent],
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {}
