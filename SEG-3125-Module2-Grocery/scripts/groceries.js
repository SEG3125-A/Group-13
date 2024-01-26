var products = [
    {
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        both: true,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        both: false,
        price: 2.35
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        both: false,
        price: 10.00
    },
    {
        name: "steak",
        vegetarian: false,
        glutenFree: true,
        both: false,
        price: 12.99
    },
    {
        name: "apples",
        vegetarian: true,
        glutenFree: true,
        both: true,
        price: 3.49
    },
    {
        name: "rice",
        vegetarian: true,
        glutenFree: true,
        both: true,
        price: 0.99
    },
    {
        name: "peanut butter",
        vegetarian: true,
        glutenFree: false,
        both: false,
        price: 5.99
    },
    {
        name: "almond milk",
        vegetarian: true,
        glutenFree: true,
        both: true,
        price: 2.99
    },
    {
        name: "chicken breast",
        vegetarian: false,
        glutenFree: true,
        both: false,
        price: 9.50
    },
    {
        name: "cheese",
        vegetarian: true,
        glutenFree: true,
        both: true,
        price: 4.50
    },
   
];

// Returns a list of products filtered by dietary restrictions
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
        else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Get the total price of products selected in the products list
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}