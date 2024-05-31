import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAnime } from '../../models/animes';
import { AnimeComponent } from '../anime/anime.component';

@Component({
	standalone: true,
	imports: [AnimeComponent, NgFor],
	selector: 'app-modal-anime',
	templateUrl: './modal-anime.component.html',
	styleUrls: ['./modal-anime.component.scss']
})
export class ModalAnimeComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public listPokemons: IAnime[]) {}
}
