import { ServicesModule } from './services/services.module';
import { FoxUiModule } from './ui/fox-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { DxFormModule } from 'devextreme-angular';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FoxUiModule,
		PagesModule,
		ServicesModule,
		DxFormModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
