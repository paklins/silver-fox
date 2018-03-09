import { Directive, ElementRef, Renderer2, DoCheck } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { getOrCreateElementRef } from '@angular/core/src/render3/di';

@Directive({
  selector: '[CollapsibleSidebar]'
})
export class CollapsibleSidebarDirective implements DoCheck{
	private _Collapsed: boolean = false;
	
	constructor(
		private _ApplicationService: ApplicationService,
		private _Renderer: Renderer2,
		private _Element: ElementRef
	) {	
		this._Collapsed = this._ApplicationService.SideBarCollapsed;

		this.SwitchCollabsibility( true );
	}

	private SwitchCollabsibility(OnInit: boolean = false){
		if(!OnInit && this._Collapsed === this._ApplicationService.SideBarCollapsed){
			return;
		}

		var ClassName: string = 'expanded';
		this._Collapsed = this._ApplicationService.SideBarCollapsed;
		
		if(this._ApplicationService.SideBarCollapsed){
			this._Renderer.removeClass( this._Element.nativeElement, ClassName );
		}else{
			this._Renderer.addClass( this._Element.nativeElement, ClassName );
		}
	}

	ngDoCheck(){
		this.SwitchCollabsibility();
	}
}