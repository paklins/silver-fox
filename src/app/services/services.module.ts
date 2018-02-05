import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService } from './application.service';

@NgModule({
  imports: [
	CommonModule
  ],
  providers:[
	  ApplicationService
  ]
})
export class ServicesModule { }
