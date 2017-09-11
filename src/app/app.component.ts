import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DBProvider } from '../providers/db/db';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private db: DBProvider, private alertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      db.loadDatabase()
        .then((data)=>{console.log(data);})
        .catch((error)=>{this.showError(error);});
    });
  }

  showError(text: string){
    let alert = this.alertCtrl.create({
      title: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}

