//Number off Items In an Array
function countCartItems(cart){
    return 'Number of Items:' + cart.length; 
}
let cart = ["Laptop", "Wireless Mouse", "Keyboard", "USB-C Cable"];
console.log(countCartItems(cart));

//Searching for a product in Cart
function productExists(products, productName){
    for (let  i=0; i<products.length; i++){
        if (products[i]===productName){
            return true;
        }
    }
    return false;
}
let products = ["Laptop", "Wireless Mouse", "Keyboard", "Monitor", "Headphones"];
console.log(productExists(products, "Laptop"));
console.log(productExists(products, "Iphone"));

//Add to Cart
function addToCart(cart2, item){
    for (let i=0; i<item.length; i++){
        cart2.push(item[i]);
    }
    return cart2;
}
let cart2 = ["Laptop", "Wireless Mouse"];
let item = ["Keyboard", "TV"];
console.log(addToCart(cart2, item));

