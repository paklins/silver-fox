import { Component } from '@angular/core';
import {DxButtonModule} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ApplicationService } from './services/application.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
  })
export class AppComponent {
	private _SidebarRatio: number = 1;

	public get SidebarRatio(): number{
		return this.ApplicationService.SidebarRatio;
	}

	public ContentRatio: number = 3;

	constructor(private ApplicationService: ApplicationService) {}

	public get SidebarCollapsed(): boolean{
		return this.ApplicationService.SideBarCollapsed;
	}
}