import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApplicationConfig } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AnimeInterceptorFn } from './commons/interceptors/animes-interceptor';

export const CONFIG: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideRouter(APP_ROUTES),
		provideHttpClient(withInterceptors([AnimeInterceptorFn])),
		importProvidersFrom(MatSnackBarModule)
	]
};
