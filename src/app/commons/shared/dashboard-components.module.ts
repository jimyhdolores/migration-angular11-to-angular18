import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AnimeComponent } from '../components/anime/anime.component';
import { ModalAnimeComponent } from '../components/modal-anime/modal-anime.component';
import { HeaderComponent } from './../components/header/header.component';
import { MenuComponent } from './../components/menu/menu.component';
@NgModule({
	declarations: [HeaderComponent, MenuComponent, AnimeComponent, ModalAnimeComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule
	],
	exports: [HeaderComponent, MenuComponent, AnimeComponent, ModalAnimeComponent]
})
export class DashboardComponentsModule {}
