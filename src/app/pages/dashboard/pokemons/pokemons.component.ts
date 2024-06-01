import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAnime } from 'src/app/commons/models/animes';
import { AnimeComponent } from '../../../commons/components/anime/anime.component';
import { AnimesService } from './../../../commons/services/animes.service';

@Component({
	standalone: true,
	imports: [AnimeComponent, NgFor],
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss'],
	providers: [AnimesService]
})
export default class PokemonsComponent implements OnInit, OnDestroy {
	private readonly _animesService = inject(AnimesService);

	private _subscriptionAnime: Subscription | undefined;
	listPokemons: IAnime[] = [];
	ngOnDestroy(): void {
		this._subscriptionAnime?.unsubscribe();
	}

	ngOnInit(): void {
		this._subscriptionAnime = this._animesService.getAnime('pokemon').subscribe((data) => {
			this.listPokemons = data;
		});
	}
}
