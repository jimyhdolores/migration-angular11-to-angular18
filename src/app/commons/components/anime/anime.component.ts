import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IAnime } from '../../models/animes';

@Component({
	standalone: true,
	imports: [MatCardModule, MatButtonModule, NgIf],
	selector: 'app-anime',
	templateUrl: './anime.component.html',
	styleUrls: ['./anime.component.scss']
})
export class AnimeComponent {
	@Input() anime = <IAnime>{};

	// constructor(public dialog: MatDialog) {}

	clickEvolutions(): void {
		// this.dialog.open(ModalAnimeComponent, {
		// 	data: this.anime.evolutions
		// });
	}
}
