import { ElectronService } from 'ngx-electron';
import { Injectable } from '@angular/core';
import { User } from '../dal/models/user';
import { Role } from '../dal/models/role';
import { UserRepository } from '../dal/user-repository';
import { RoleRepository } from '../dal/role-repository';

@Injectable()
export class ApplicationService {
	private _SideBarCollapsed: boolean = false;
	private _isApplication: boolean = false;
	private _RequestKey: string;
	private _CurrentUser: User;
	private _CurrentRole: Role;

	constructor(private _ElectronService: ElectronService) { 
		this._isApplication = this._ElectronService.isElectronApp;

		this._CurrentUser = UserRepository.GetUser( "0" );
		this._CurrentRole = RoleRepository.GetById( "0" );
	}

	public get SideBarCollapsed() : boolean {
		return this._SideBarCollapsed;
	}
	
	public get isApplication(): boolean{
		return this._isApplication;
	}

	public TurnMainSidebar(): void {
		this._SideBarCollapsed = !this._SideBarCollapsed;
	}

	public get CurrentUser(): User{
		return this._CurrentUser;
	}

	public get CurrentRole(): Role{
		return this._CurrentRole;
	}
}
