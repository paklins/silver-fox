import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule } from 'devextreme-angular/ui/button';

import { ApplicationFooterComponent } from './application-footer/application-footer.component';
import { ApplicationSidebarComponent } from './application-sidebar/application-sidebar.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { WindowComponent } from './window/window.component';
import { ApplicationHeaderSystemButtonComponent } from './application-header-system-button/application-header-system-button.component';

@NgModule({
	imports: [
		CommonModule,
		DxButtonModule
	],
	declarations: [
		  ApplicationFooterComponent, 
		  ApplicationSidebarComponent, 
		  ApplicationHeaderComponent,
		  WindowComponent,
		  ApplicationHeaderSystemButtonComponent
	],
	exports:[
		ApplicationHeaderComponent,
		ApplicationSidebarComponent,
		ApplicationFooterComponent,
		ApplicationHeaderSystemButtonComponent,
		WindowComponent
	]
})
export class FoxUiModule { }
