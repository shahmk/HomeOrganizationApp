import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { Room } from '../../app/models/models';
import { DBProvider } from '../../providers/db/db';
/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  rooms = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadRooms();
      }
    })
  }

  loadRooms(){
    this.db.getRooms()
    .then(data=>{
      this.rooms = data;
    })
    .catch(err =>{
      this.showError(err);
    });
  }

  createRoom(){
    let alert = this.alertCtrl.create({
      message: 'Enter a room name:',
      inputs: [{type: 'text', placeholder: 'Room Name'}],
      buttons: [{text:'Cancel',role:'cancel'},
      {
        text: 'Create',
        handler: data=>{
            if(data[0] === ''){
              this.showError('Please give a valid room name.');
            }else{
              this.db.createRoom(data[0])
              .then(data =>{
                this.loadRooms();
                console.log(data);
              })
              .catch(error =>{
                this.showError(error);
              })
            }
          }
        }]
    });
    alert.present();
  }

  showError(text){
    let alert = this.alertCtrl.create({
      message: text,
      buttons: ['OK']
    });

    alert.present();
  }


}
