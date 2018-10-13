import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FazerPerguntaPage } from '../fazer-pergunta/fazer-pergunta';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  items$: FirebaseListObservable<any[]>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af: AngularFireDatabase, 
		data: DataService, 
		private nav: NavController, 
		public auth: AuthService,
		private fb: FirebaseApp) {
    this.items$ = data.getPerguntas();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }
  add() {			
		this.navCtrl.push(FazerPerguntaPage);
	}


}
