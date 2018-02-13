import { ApplicationService } from './../../services/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fox-application-footer',
  templateUrl: './application-footer.component.html',
  styleUrls: ['./application-footer.component.scss']
})
export class ApplicationFooterComponent implements OnInit {

  constructor(private ApplicationService: ApplicationService) { }

	ngOnInit() {
	}

	public get SidebarCollapsed() : boolean {
		return this.ApplicationService.SideBarCollapsed;
	}
}
