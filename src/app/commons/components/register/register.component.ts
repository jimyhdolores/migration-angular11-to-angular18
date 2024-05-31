import { Component } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BasicFormModule } from '../../module/basic-form.module';
import { IRegister } from './../../models/auth';
import { MODEL_REGISTER_ERRORS, customValidator } from './model-message-error';

@Component({
	standalone: true,
	imports: [BasicFormModule],
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class RegisterComponent {
	registerUser: IRegister = <IRegister>{};
	myRegisterForm: UntypedFormGroup | undefined;

	constructor() {
		this._loadBuilder();
	}

	clickRegister(): void {
		if (this.myRegisterForm?.valid) {
			console.log('******VALIDADO*****');
		} else {
			console.log('******SIGUE VALIDANDO*****');
		}
	}

	private _loadBuilder(): void {
		this.myRegisterForm = new UntypedFormGroup({
			username: new UntypedFormControl('', [Validators.required, Validators.minLength(5), customValidator()]),
			password: new UntypedFormControl('', [Validators.required]),
			repeatPassword: new UntypedFormControl('')
		});
		this.myRegisterForm.get('')?.valid;
	}

	getError(controlName: string): string {
		const control = this.myRegisterForm?.get(controlName);
		if (control?.invalid && control?.touched) {
			const atributeError = MODEL_REGISTER_ERRORS.find((x) => x.formControlName == controlName);
			const validator = atributeError?.validators.find((validator) => control.errors![validator.name]);
			return validator!.message;
		}
		// if (control?.invalid && control?.hasError('required')) {
		// 	return 'El usuario es requerido';
		// }

		// if (control?.invalid && control?.hasError('minlength')) {
		// 	return 'La cantidad minima es 5';
		// }
		return '';
	}

	get usernameAbstract(): AbstractControl | null | undefined {
		return this.myRegisterForm?.get('username');
	}
}
