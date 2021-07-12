class Item {
    static lastId = 0;
    constructor(text){
        this.id = Item.lastId++
        this.text = text;
        this.isDone = false;
    }
   
}
export default Item