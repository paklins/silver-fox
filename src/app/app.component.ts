import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './services/application.service';
import { ElectronService } from 'ngx-electron';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
  })
export class AppComponent implements OnInit{
	constructor(
		private ApplicationService: ApplicationService, 
		private _ElectronService: ElectronService) {}

	public ngOnInit(): void{
	}
}