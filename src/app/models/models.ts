
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

	constructor($itemId: number, $itemName: string, $itemDesc: string, $parentId: number, $categoryId: number, $roomId: number,$numberTimesUsed: number, $price: string, $pic_location: string) {
		this.itemId = $itemId;
		this.itemName = $itemName;
		this.itemDesc = $itemDesc;
		this.parentId = $parentId;
    this.categoryId = $categoryId;
    this.roomId = $roomId;
		this.numberTimesUsed = $numberTimesUsed;
		this.price = $price;
		this.pic_location = $pic_location;
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

  constructor($roomId: number, $roomName: string) {
    this.roomId = $roomId;
    this.roomName = $roomName;
  }

}