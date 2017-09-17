
export class Item{
  
  private itemId: number;
  private itemName: string;
  private itemDesc: string;
  private parentId: number;
  private categoryId: number;
  private roomId: number;
  private numberTimesUsed: number;
  private price: string;
  private pic_location: string;

	constructor(obj) {
		this.itemId = obj.itemId;
		this.itemName = obj.itemName;
		this.itemDesc = obj.itemDesc;
		this.parentId = obj.parentId;
    this.categoryId = obj.categoryId;
    this.roomId = obj.roomId;
		this.numberTimesUsed = obj.numberTimesUsed;
		this.price = obj.price;
		this.pic_location = obj.pic_location;
  }
  
  public getItemId():number{
    return this.itemId;
  }

  public toString(): string{
    return '' + this.itemDesc + ',' + this.parentId + ',' + this.categoryId + ',' + this.roomId + ',' + this.numberTimesUsed + ',' + this.price + ',' + this.pic_location;
  }
}

export class Category{
  private categoryId: number;
  private categoryName: string;
  private parentId: number;

	constructor($categoryId: number, $categoryName: string, $parentId: number) {
    this.categoryId = $categoryId;
    this.categoryName = $categoryName;
    this.parentId = $parentId;
  }
  
  public toString(): string{
    return '' + this.categoryName + ',' + this.parentId;
  }
  
}

export class Lists{
  private listId: number;
  private listName:string;

	constructor($listId: number, $listName: string) {
    this.listId = $listId;
    this.listName = $listName;
  }
  
  public toString(): string{
    return ''  + this.listName;
  }

  public getListId():number{
    return this.listId;
  }

}

export class ItemList{
  private id: number;
  private listId: number;
  private itemId: number;


	constructor($id: number, $listId: number, $itemId: number) {
    this.id = $id;
    this.listId = $listId;
    this.itemId = $itemId;
  }
  
  public toString(): string{
    return '' + this.listId + ',' + this.itemId;
  }
  
}

export class Room{
  private roomId: number;
  private roomName: string;

  constructor(obj) {
    this.roomId = obj.roomId;
    this.roomName = obj.roomName;
  }

}