import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Directive({
	selector: '[ApplicationHeader]'
})
export class ApplicationHeaderDirective implements OnInit{
	constructor(
		private _ApplicationService: ApplicationService,
		private _ElementRef: ElementRef,
		private _Renderer: Renderer2
	) { }

	ngOnInit(){
		if( this._ApplicationService.isApplication ){
			this._Renderer.addClass( 
				this._ElementRef.nativeElement, 
				'desktop-application'
			);
		}
	}
}