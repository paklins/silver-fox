import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
	selector: 'fox-application-header',
	templateUrl: './application-header.component.html',
	styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {
	constructor(private _ApplicationService: ApplicationService) { }

	public get ApplicationService(): ApplicationService{
		return this._ApplicationService;
	}

	ngOnInit() {
	}

	public TurnSideBar(){
		this._ApplicationService.TurnMainSidebar();
	}
}
