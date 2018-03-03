import { ElectronService } from 'ngx-electron';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
	private _SideBarCollapsed: boolean = false;
	private _isApplication: boolean = false;

	public get SideBarCollapsed() : boolean {
		return this._SideBarCollapsed;
	}
	
	public get isApplication(){
		return this._isApplication;
	}

	public TurnMainSidebar() {
		this._SideBarCollapsed = !this._SideBarCollapsed;
	}

	constructor(private _ElectronService: ElectronService) { 
		this._isApplication = this._ElectronService.isElectronApp;
	}
}
