import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Aluno } from '../../../models/json.model';
import { HomePage } from '../home/home';
import { Signup1Page } from '../signup1/signup1';
import { PerfilPage } from '../perfil/perfil';


@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.page.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;
	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
		private auth: AuthService,
		private afi: AngularFireAuth,
		public af: AngularFireDatabase
	) {
	
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}
	
	signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password  
		};
		this.auth.signUp(credentials).then(() => 				
		this.navCtrl.push(Signup1Page)),
			error => this.signupError = error.message
	
	}
	
}
