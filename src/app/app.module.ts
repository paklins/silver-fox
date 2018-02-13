import { ElectronService } from 'ngx-electron';
import { ServicesModule } from './services/services.module';
import { FoxUiModule } from './ui/fox-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FoxUiModule,
		PagesModule,
		ServicesModule
	],
	providers: [ElectronService],
	bootstrap: [AppComponent]
})
export class AppModule { }
