import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { ApplicationConfig } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AnimeInterceptor } from './commons/interceptors/animes-interceptor';

export const CONFIG: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideRouter(APP_ROUTES),
		importProvidersFrom(HttpClientModule, MatSnackBarModule),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AnimeInterceptor,
			multi: true
		}
	]
};
