import { NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { IAnime } from '../../models/animes';
import { ModalAnimeComponent } from '../modal-anime/modal-anime.component';

@Component({
	standalone: true,
	imports: [MatCardModule, MatButtonModule, NgIf],
	selector: 'app-anime-dialog',
	templateUrl: './anime.component.html',
	styleUrls: ['./anime.component.scss']
})
export class AnimeComponent {
	@Input() anime = {} as IAnime;
	public readonly _DIALOG = inject(MatDialog);

	clickEvolutions(): void {
		this._DIALOG.open(ModalAnimeComponent, {
			data: this.anime.evolutions
		});
	}
}
