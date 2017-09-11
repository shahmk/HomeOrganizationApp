import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Item, Category, Lists, ItemList } from '../../app/models/models';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DBProvider {

  dbName: string = 'Home.db';


  constructor(private storage: SQLite) {
    console.log('Hello DbProvider Provider');
  }

  public loadDatabase(){
    return new Promise((resolve,reject)=>{
      this.storage.create({name: this.dbName,location: 'default'})
        .then((db: SQLiteObject) =>{
          //creates category table
          db.executeSql('CREATE TABLE IF NOT EXISTS category(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, name TEXT, parent_id INTEGER, FOREIGN KEY(parent_id) REFERENCES category(id));',{})
            .then(data =>{console.log("created category table")}).catch(error =>{console.log("Didn't create category table.")});
          //creates item table
          db.executeSql('CREATE TABLE IF NOT EXISTS item(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, name TEXT, description TEXT, parent_id INTEGER,category_id INTEGER, number_times_used INTEGER, price TEXT, pic_location TEXT , FOREIGN KEY(parent_id) REFERENCES item(id), FOREIGN KEY(category_id) REFERENCES category(id));',{})
            .then(data =>{console.log("created item table")}).catch(error =>{console.log("Didn't create item table.")});
          //creates lists table
          db.executeSql('CREATE TABLE IF NOT EXISTS lists(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, name TEXT);',{})
            .then(data =>{console.log("created list table")}).catch(error =>{console.log("Didn't create list table.")});
          //creates item_list table
          db.executeSql('CREATE TABLE IF NOT EXISTS item_list(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, list_id INTEGER, item_id INTEGER, FOREIGN KEY(item_id) REFERENCES item(id),FOREIGN KEY(list_id) REFERENCES lists(id));',{})
            .then(data =>{console.log("created item_list table")}).catch(error =>{console.log("Didn't create item_lists table.")});

          resolve("database loaded!");
        })
        .catch(error =>{
          reject('Error opening database. Please try again.');
        })
    });
  }

  public createItem(item: Item){
    return new Promise((resolve,reject)=>{
      this.storage.create({name: this.dbName,location: 'default'})
        .then((db: SQLiteObject) =>{
          db.executeSql('INSERT INTO item VALUES('+ item.toString() +')',{})
          .then(()=>{
            resolve("Item Added");
          })
          .catch(error =>{
            reject("Couldn't add item");
          })
        })
        .catch((error)=>{
          reject("Couldn't make connection to database.");
        })
    });
  }

  public createCategory(category: Category){
    return new Promise((resolve,reject)=>{
      this.storage.create({name: this.dbName,location: 'default'})
        .then((db: SQLiteObject) =>{
          db.executeSql('INSERT INTO category VALUES('+ category.toString() +')',{})
          .then(()=>{
            resolve("Category Added");
          })
          .catch(error =>{
            reject("Couldn't add category");
          })
        })
        .catch((error)=>{
          reject("Couldn't make connection to database.");
        })
    });
  }

  public createList(lists: Lists){
    return new Promise((resolve,reject)=>{
      this.storage.create({name: this.dbName,location: 'default'})
        .then((db: SQLiteObject) =>{
          db.executeSql('INSERT INTO lists VALUES('+ lists.toString() +')',{})
          .then(()=>{
            resolve("List Added");
          })
          .catch(error =>{
            reject("Couldn't add List");
          })
        })
        .catch((error)=>{
          reject("Couldn't make connection to database.");
        })
    });
  }

  public addItemtoList(lists: Lists, item: Item){
    return new Promise((resolve,reject)=>{
      this.storage.create({name: this.dbName,location: 'default'})
        .then((db: SQLiteObject) =>{
          db.executeSql('INSERT INTO item_list VALUES(NULL,'+ item.getItemId() + ',' + lists.getListId() +')',{})
          .then(()=>{
            resolve("item Added list");
          })
          .catch(error =>{
            reject("Couldn't add item to List");
          })
        })
        .catch((error)=>{
          reject("Couldn't make connection to database.");
        })
    });
  }
}

