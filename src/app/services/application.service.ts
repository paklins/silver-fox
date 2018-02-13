import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
	private _SideBarCollapsed: boolean = false;

	public get SideBarCollapsed() : boolean {
		return this._SideBarCollapsed;
	}
	
	public TurnMainSidebar() {
		this._SideBarCollapsed = !this._SideBarCollapsed;
	}

	constructor() { }
}
