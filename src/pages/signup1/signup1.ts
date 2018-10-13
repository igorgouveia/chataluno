import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { Aluno } from '../../../models/json.model';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the Signup1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup1',
  templateUrl: 'signup1.html',
})
export class Signup1Page {
	signupError: string;
	form1: FormGroup;
	lista: FirebaseListObservable<any>;
	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
		private auth: AuthService,
		private afi: AngularFireAuth,
		public af: AngularFireDatabase
	) {
		this.lista = this.af.list('/alunos');
		
	}
	
	signup1() {
		this.lista.push(this.json).then(() => {			
			this.navCtrl.setRoot(HomePage)}),
			error => this.signupError = error.message;	
	}
	json: Aluno = {
    nome:' ',
    matricula: ' ',
    curso: ' ',
    uid: this.auth.getid(),

	}; 
}
