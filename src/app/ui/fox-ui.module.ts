import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxiItemModule } from 'devextreme-angular/ui/nested/item-dxi';
import { DxBoxModule, DxButtonModule } from 'devextreme-angular';
import { ApplicationFooterComponent } from './application-footer/application-footer.component';
import { ApplicationSidebarComponent } from './application-sidebar/application-sidebar.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { WindowComponent } from './window/window.component';

@NgModule({
	imports: [
		CommonModule,
		DxiItemModule,
		DxBoxModule,
		DxButtonModule
	],
	declarations: [
		  ApplicationFooterComponent, 
		  ApplicationSidebarComponent, 
		  ApplicationHeaderComponent,
		  WindowComponent
	],
	exports:[
		DxButtonModule,
		DxBoxModule,
		DxiItemModule,

		ApplicationHeaderComponent,
		ApplicationSidebarComponent,
		ApplicationFooterComponent,
		WindowComponent
	]
})
export class FoxUiModule { }
