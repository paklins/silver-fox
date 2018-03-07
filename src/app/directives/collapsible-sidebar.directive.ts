import { Directive, ElementRef, Renderer2, DoCheck } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { getOrCreateElementRef } from '@angular/core/src/render3/di';

@Directive({
  selector: '[CollapsibleSidebar]'
})
export class CollapsibleSidebarDirective implements DoCheck{
	constructor(
		private _ApplicationService: ApplicationService,
		private _Renderer: Renderer2,
		private _Element: ElementRef
	) {	}

	ngDoCheck(){
		var ClassName: string = 'expanded';

		if(this._ApplicationService.SideBarCollapsed){
			this._Renderer.removeClass( this._Element.nativeElement, ClassName );
		}else{
			this._Renderer.addClass( this._Element.nativeElement, ClassName );
		}
	}
}