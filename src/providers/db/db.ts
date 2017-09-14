import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Item, Category, Lists, ItemList } from '../../app/models/models';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
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
  private databaseReady: BehaviorSubject<boolean>;


  constructor(private sqlite: SQLite,private sqlitePorter: SQLitePorter, private http: Http, private storage: Storage, private platform: Platform) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(()=>{
      this.sqlite.create({name: this.dbName,location: 'default'})
      .then((db: SQLiteObject) =>{
        this.database = db;
        this.storage.get('database_filled').then(val => {
          if (val) {
            this.databaseReady.next(true);
          } else {
            this.fillDatabase();
          }
        });
      });
    });
  }

  //gets premade database at first usage of the app
  fillDatabase(){
    this.http.get('assets/starter.sql')
    .map(res => res.text())
    .subscribe(sql =>{
      this.sqlitePorter.importSqlToDb(this.database,sql)
        .then(data =>{
          this.storage.set('database_filled',true);
          console.log("database loaded!");
        })
        .catch(e => {
          console.log(e)
        });
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

  public getItems(parent){
    let sql:string = 'SELECT * FROM item WHERE item_parent ';
    if(parent === null){
      sql += 'is null';
    }else{
      sql+= '= ' + parent;
    }
    return this.database.executeSql(sql,{})
    .then((data)=>{
      return data;
    })
    .catch((err)=>{
      console.log(err);
      return err;
    })
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

  public getCategories(parent){
    let sql:string = 'SELECT * FROM category WHERE category_parent ';
    if(parent === null){
      sql += 'is null';
    }else{
      sql+= '= ' + parent;
    }
    return this.database.executeSql(sql,{})
    .then((data)=>{
      return data;
    })
    .catch((err)=>{
      console.log(err);
      return err;
    })
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

  public getLists(){
    let sql:string = 'SELECT * FROM lists;';
    return this.database.executeSql(sql,{})
    .then((data)=>{
      return data;
    })
    .catch((err)=>{
      console.log(err);
      return err;
    })
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

  public getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}

