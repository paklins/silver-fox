import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
	selector: 'fox-application-sidebar',
	templateUrl: './application-sidebar.component.html',
	styleUrls: ['./application-sidebar.component.scss']
})
export class ApplicationSidebarComponent implements OnInit {
	constructor(private _ApplicationService: ApplicationService) { }

	ngOnInit() {}

	public get CurrentUserFullName(): string{
		return this._ApplicationService.CurrentUser.FullName;
	}

	public get CurrentRole(): string{
		return this._ApplicationService.CurrentRole.Presentation;
	}
}
