import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Directive({
	selector: '[SystemButton]'
})
export class SystemButtonDirective implements OnInit{
	constructor(
		private _ApplicationService: ApplicationService,
		private _ElementRef: ElementRef,
		private _Renderer: Renderer2
	) { }

	ngOnInit(){
		this._Renderer.setStyle( 
			this._ElementRef.nativeElement, 
			'display',  
			this._ApplicationService.isApplication ? 'block' : 'none'
		);
	}
}