var Grocery = /** @class */ (function () {
    function Grocery(groceryItem, quantity, price) {
        this.groceryItem = groceryItem;
        this.quantity = quantity;
        this.price = price;
        this.itemName = groceryItem + " " + quantity + " " + price;
    }
    return Grocery;
}());
function groceryList(item) {
    return '<li>' + item.groceryItem + "<br />" + "Quantity: " + item.quantity + "<br />" + " Price " + "$" + item.price + "<br />" + "<br />";
}
var listItem = new Grocery("Banana", 6, 3.99);
var listItem1 = new Grocery("Eggs", 18, 3.59);
var listItem2 = new Grocery("Milk", 1, 3.27);
var listItem3 = new Grocery("Bread", 1, 1.59);
document.body.innerHTML = groceryList(listItem) + groceryList(listItem1) + groceryList(listItem3);
