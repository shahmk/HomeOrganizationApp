import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Item, Category, Lists, ItemList } from '../../app/models/models';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DBProvider {

  dbName: string = 'Home.db';
  database: SQLiteObject;


  constructor(private sqlite: SQLite,private sqlitePorter: SQLitePorter, private http: Http, private storage: Storage) {
    console.log('Hello DbProvider Provider');
  }

  public loadDatabase(){
    return new Promise((resolve,reject)=>{
      this.sqlite.create({name: this.dbName,location: 'default'})
        .then((db: SQLiteObject) =>{
          this.database = db;
          this.http.get('assets/start.sql')
            .map(res => res.text())
            .subscribe(sql =>{
              this.sqlitePorter.importSqlToDb(this.database,sql)
                .then(data =>{
                  this.storage.set('dbLoaded',true);
                  resolve("database loaded!");
                })
                .catch(e => {
                  console.log(e)
                  reject('Error loading database. Please try again')
                });
            });
          // //creates category table
          // db.executeSql('CREATE TABLE IF NOT EXISTS category(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, name TEXT, parent_id INTEGER, FOREIGN KEY(parent_id) REFERENCES category(id));',{})
          //   .then(data =>{console.log("created category table")}).catch(error =>{console.log("Didn't create category table.")});
          // //creates item table
          // db.executeSql('CREATE TABLE IF NOT EXISTS item(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, name TEXT, description TEXT, parent_id INTEGER,category_id INTEGER, number_times_used INTEGER, price TEXT, pic_location TEXT , FOREIGN KEY(parent_id) REFERENCES item(id), FOREIGN KEY(category_id) REFERENCES category(id));',{})
          //   .then(data =>{console.log("created item table")}).catch(error =>{console.log("Didn't create item table.")});
          // //creates lists table
          // db.executeSql('CREATE TABLE IF NOT EXISTS lists(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, name TEXT);',{})
          //   .then(data =>{console.log("created list table")}).catch(error =>{console.log("Didn't create list table.")});
          // //creates item_list table
          // db.executeSql('CREATE TABLE IF NOT EXISTS item_list(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, list_id INTEGER, item_id INTEGER, FOREIGN KEY(item_id) REFERENCES item(id),FOREIGN KEY(list_id) REFERENCES lists(id));',{})
          //   .then(data =>{console.log("created item_list table")}).catch(error =>{console.log("Didn't create item_lists table.")});
        })
        .catch(error =>{
          reject('Error opening database. Please try again.');
        })
    });
  }

  public createItem(item: Item){
    return this.database.executeSql('INSERT INTO item VALUES('+ item.toString() +')',{})
    .then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  public createCategory(category: Category){
    return this.database.executeSql('INSERT INTO category VALUES('+ category.toString() +')',{})
    .then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  public createList(lists: Lists){
    return this.database.executeSql('INSERT INTO lists VALUES('+ lists.toString() +')',{})
    .then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  public addItemtoList(lists: Lists, item: Item){
    return this.database.executeSql('INSERT INTO item_list VALUES(NULL,'+ item.getItemId() + ',' + lists.getListId() +')',{})
    .then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
}

