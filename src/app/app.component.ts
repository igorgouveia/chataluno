import { NgModule } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ChatRoomsPage } from '../pages/chat/chat-rooms.page';
import { LoginPage } from '../pages/login/login.page';
import { AuthService } from '../services/auth.service';
import { ChatMessagesPage } from '../pages/chat/chat-messages.page';
import { PerguntasPage } from '../pages/perguntas/perguntas';
import { PerfilPage } from '../pages/perfil/perfil';
import { HomePage } from '../pages/home/home';

@Component({
	templateUrl: './app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform, menu: MenuController, private statusBar: StatusBar, private auth: AuthService) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Perfil', component: PerfilPage, icon: 'contact' },
			{ title: 'Chat', component: ChatMessagesPage, icon: 'chatboxes' },
			{ title: 'Perguntas', component: PerguntasPage, icon: 'chatboxes' },
			
			

		
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});

		
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}

	logout() {
		this.menu.close();

		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	login() {
		this.menu.close();

		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}
}
