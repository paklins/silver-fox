import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fox-application-header-system-button',
  templateUrl: './application-header-system-button.component.html',
  styleUrls: ['./application-header-system-button.component.scss']
})
export class ApplicationHeaderSystemButtonComponent implements OnInit {
	@Input()
	public iconName: string = "dx-icon-remove";

	@Input()
	public type: string = "";

	@Input()
	public visibility: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
