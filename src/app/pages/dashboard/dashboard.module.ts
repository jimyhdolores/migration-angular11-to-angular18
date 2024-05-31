import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [HeaderComponent, MenuComponent],
	imports: [
		RouterLink,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		NgFor,
		RouterLinkActive,
		RouterLink
	],
	exports: [HeaderComponent, MenuComponent, MatSidenavModule]
})
export class DashboardModule {}
