//Exteding is basically creating a sub class

//Declaring a class
class Product{
    constructor(itemName){
        this.itemName=itemName;
    }

    getItemName(){
        return this.itemName + " is a Product";
    }
}

class subProduct extends Product{
    constructor(itemName){
        super(itemName);
    }

    getItemName(){
        return this.itemName + " is a subProduct";
    }
}

let pencil = new Product('Pencil');
let chair = new subProduct('Chair');