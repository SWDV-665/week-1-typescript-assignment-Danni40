class Grocery {
    itemName: string;
    constructor(public groceryItem: string, public quantity: number, public price: number) {
    this.itemName = groceryItem + " " + quantity + " " + price;
    }
}

interface Item {
    groceryItem: string;
    quantity: number;
    price: number;
}
function groceryList(item : Item) {
    return '<li>' + item.groceryItem + "<br />" + "Quantity: " + item.quantity + "<br />" + " Price " + "$"+ item.price + "<br />" + "<br />";
    }

let listItem = new Grocery("Banana", 6, 3.99);
let listItem1 = new Grocery("Eggs", 18, 3.59);
let listItem2 = new Grocery("Milk", 1, 3.27);
let listItem3 = new Grocery("Bread", 1, 1.59);
document.body.innerHTML = groceryList(listItem) +  groceryList(listItem1) + groceryList(listItem3);
