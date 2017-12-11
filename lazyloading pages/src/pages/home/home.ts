import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  item:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  navigateToAbout(item){
    // this.navCtrl.push('AboutPage');
    // this.navCtrl.push('About1Page');
    // this.navCtrl.push('About2Page');
    // this.navCtrl.push('About3Page');
    // this.navCtrl.push('About'+this.item+'Page'); //classic bindings work
    this.navCtrl.push(`About${this.item}Page`); //template strings also work
  }

}
