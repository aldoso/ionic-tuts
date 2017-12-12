import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {}

  // ionViewDidLoad should start the banner ad as soon as the app is ready
  ionViewDidLoad() {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: '',
        isTesting: false,
        autoShow: true
      };

      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
  }


  showBanner() {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: '',
        isTesting: false,
        autoShow: true
      };

      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
  }


  showInterstitial() {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: '',
        isTesting: false,
        autoShow: true
      };

      this.admobFree.interstitial.config(interstitialConfig);

      this.admobFree.interstitial.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
  }


  showRewarded() {
      const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
        id: '',
        isTesting: false,
        autoShow: true
      };

      this.admobFree.rewardVideo.config(rewardVideoConfig);

      this.admobFree.rewardVideo.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
  }


}
