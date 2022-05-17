/*OOP
Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behaviour that you want it to have.

CLASS
->Classes are a template for creating objects
->Classes Encapsulate data with code to work on that data
->Classes are in fact "special functions"
*/

class ClassName{
    constructor(itemName, price, discount, productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let object = new ClassName('Pencil', 20, 2, 'p10');
console.log(ClassName.itemName);

const ClassName2 = class ClassName{
    constructor(itemName, price, discount, productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }

    get getDiscountValue(){
        return this.discount;
    }

    set setDiscountValue(value){
        this.discount = value;
    }

    discountValue(){
        return this.discount*this.price/100;
    }

};

let chair  = new ClassName2('Chair', 499, 15, 'C10');
console.log(ClassName2.itemName);
console.log(getDiscountValue);
chair.setDiscountValue = 10;
console.log(getDiscountValue);