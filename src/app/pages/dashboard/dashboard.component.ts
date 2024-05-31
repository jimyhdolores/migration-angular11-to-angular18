import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './dashboard.module';

@Component({
	standalone: true,
	imports: [DashboardModule, MatDialogModule, RouterOutlet],
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
