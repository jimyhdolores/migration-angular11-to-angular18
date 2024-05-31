import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../models/animes';
import { TypeAnime } from './../models/types';
import { PathRest } from './../static/path-rest';

@Injectable()
export class AnimesService {
	private readonly _httpClient = inject(HttpClient);

	getAnime(anime: TypeAnime): Observable<IAnime[]> {
		const path = PathRest.GET_ANIME + '/' + anime;
		return this._httpClient.get<IAnime[]>(path);
	}
}
