import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Pergunta } from '../../../models/json.model';
import { PerguntasPage } from '../perguntas/perguntas';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the FazerPerguntaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-fazer-pergunta',
  templateUrl: 'fazer-pergunta.html',
})
export class FazerPerguntaPage {
  data = new Date().toLocaleDateString();
	lista: FirebaseListObservable<any>;
  constructor(
    private alertCtrl: AlertController,
		public af: AngularFireDatabase,
		data: DataService,
		public navCtrl: NavController,
		navParams: NavParams,
		public auth: AuthService,
	) {
    this.lista = this.af.list('/perguntas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FazerPerguntaPage');
  }

  presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Mensagem de confimação',
			subTitle: 'Sua pergunta foi enviada com sucesso!',
			buttons: ['Ok']
		});
		alert.present();
		this.navCtrl.push(PerguntasPage);
	}

  json: Pergunta = {
    assunto: '',
    pergunta: '',
		uid: this.auth.getid(),
		username: this.auth.getName(),
		useremail: this.auth.getEmail(),
		data: this.data,
    resposta:'',

	};
	cadastrar(): void{
  this.lista.push(this.json).then(() => {
				  this.presentAlert();
	});
  
}
}
