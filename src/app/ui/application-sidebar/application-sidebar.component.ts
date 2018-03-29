import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
	selector: 'fox-application-sidebar',
	templateUrl: './application-sidebar.component.html',
	styleUrls: ['./application-sidebar.component.scss']
})
export class ApplicationSidebarComponent implements OnInit {
	private _MaxUserNameFullname: number = 15;

	constructor(private _ApplicationService: ApplicationService) { }

	ngOnInit() {}

	public get CurrentUserFullName(): string{
		let CurrentUserName: string = this._ApplicationService.CurrentUser.FullName.substr( 0, this._MaxUserNameFullname - 3 );

		return CurrentUserName.length === this._MaxUserNameFullname -3 
			?  CurrentUserName.trim() + '...'
			: CurrentUserName;
	}

	public get CurrentRole(): string{
		return this._ApplicationService.CurrentRole.Presentation;
	}
}
