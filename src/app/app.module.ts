import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';

import { SupportComponent } from './pages/support/support.component';
import { RadioModule } from "carbon-components-angular";
import { InputModule } from "carbon-components-angular";
import { CheckboxModule } from "carbon-components-angular";
import{ModalModule} from "carbon-components-angular";
import { ButtonModule } from "carbon-components-angular";
import { DatePickerModule } from "carbon-components-angular";
import { TableModule, PaginationModule } from 'carbon-components-angular';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CatalogComponent,
		DocsComponent,
		SupportComponent,
		
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		RadioModule,
		InputModule,
		CheckboxModule,
		ButtonModule,
		ModalModule,
		DatePickerModule,
		TableModule,
		PaginationModule
		
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
