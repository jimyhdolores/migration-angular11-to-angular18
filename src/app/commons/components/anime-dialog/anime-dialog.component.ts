import { NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { IAnime } from '../../models/animes';

@Component({
	standalone: true,
	imports: [MatCardModule, MatButtonModule, NgIf],
	selector: 'app-anime-dialog',
	templateUrl: './anime-dialog.component.html',
	styleUrls: ['./anime-dialog.component.scss']
})
export class AnimeDialogComponent {
	@Input() anime = {} as IAnime;
	public readonly _DIALOG = inject(MatDialog);
}
