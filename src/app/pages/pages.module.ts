import { FoxUiModule } from './../ui/fox-ui.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';

import { StartPageComponent } from './start-page/start-page.component';

const ApplicationRoutes: Routes = [
	{ path: '', component: StartPageComponent }
];

@NgModule({
	imports: [
		CommonModule,
		FoxUiModule,
		RouterModule.forRoot(
			ApplicationRoutes//,
			//{ enableTracing: !environment.production }
		)
	],
	exports: [
		RouterModule,
		StartPageComponent
	],
	declarations: [StartPageComponent]
})
export class PagesModule { }
