import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseApp } from 'angularfire2';

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  uid: any = this.auth.getid()
	items$: FirebaseListObservable<any[]>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af: AngularFireDatabase, 
		data: DataService, 
		private nav: NavController, 
		public auth: AuthService,
		private fb: FirebaseApp) {
    this.items$ = data.getPerfil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
