import { ApplicationService } from "../services/application.service";

export class BaseElement {
	constructor(private _ApplicationService: ApplicationService){}

	public get SidebarCollapsed() : boolean {
		return this._ApplicationService.SideBarCollapsed;
	}
}
