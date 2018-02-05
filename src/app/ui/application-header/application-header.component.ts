import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
	selector: 'fox-application-header',
	templateUrl: './application-header.component.html',
	styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {
	constructor(private ApplicationService: ApplicationService) { }

	ngOnInit() {
	}

	public TurnSideBar(){
		this.ApplicationService.TurnMainSidebar();
	}
}
