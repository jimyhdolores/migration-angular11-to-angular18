import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AnimeInterceptorFn } from './commons/interceptors/animes-interceptor';

export const CONFIG: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideRouter(APP_ROUTES),
		provideHttpClient(withInterceptors([AnimeInterceptorFn])),
		// provideZoneChangeDetection({ eventCoalescing: true }),
		provideExperimentalZonelessChangeDetection()
	]
};
