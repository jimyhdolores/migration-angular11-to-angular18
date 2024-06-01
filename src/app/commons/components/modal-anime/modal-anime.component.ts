import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogTitle
} from '@angular/material/dialog';
import { IAnime } from '../../models/animes';
import { AnimeDialogComponent } from '../anime-dialog/anime-dialog.component';

@Component({
	standalone: true,
	imports: [MatDialogTitle, MatDialogContent, MatDialogClose, MatDialogActions, AnimeDialogComponent, MatButton],
	selector: 'app-modal-anime',
	templateUrl: './modal-anime.component.html',
	styleUrls: ['./modal-anime.component.scss']
})
export class ModalAnimeComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public listPokemons: IAnime[]) {}
}
