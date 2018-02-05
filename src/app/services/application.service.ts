import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
	private _SideBarCollapsed: boolean = false;
	private _SidebarRatio: number = 1;

	public get SideBarCollapsed() : boolean {
		return this._SideBarCollapsed;
	}
	
	public TurnMainSidebar() {
		this._SidebarRatio ++;
		this._SideBarCollapsed = !this._SideBarCollapsed;
	}

	public get SidebarRatio(): number{
		return this._SidebarRatio;
	}

	constructor() { }
}
