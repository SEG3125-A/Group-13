var products = [
    {
        name: "Broccoli",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: true, 
        price: 1.99
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        both: false,
        organic: false, 
        price: 2.35
    },
    {
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        both: false,
        organic: true, 
        price: 10.00
    },
    {
        name: "Steak",
        vegetarian: false,
        glutenFree: true,
        both: false,
        organic: false, 
        price: 12.99
    },
    {
        name: "Apples",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: true, 
        price: 3.49
    },
    {
        name: "Rice",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: false, 
        price: 0.99
    },
    {
        name: "Peanut butter",
        vegetarian: true,
        glutenFree: false,
        both: false,
        organic: true, 
        price: 5.99
    },
    {
        name: "Almond milk",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: false, 
        price: 2.99
    },
    {
        name: "Chicken breast",
        vegetarian: false,
        glutenFree: true,
        both: false,
        organic: true, 
        price: 9.50
    },
    {
        name: "Cheese",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: false, 
        price: 4.50
    }
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
        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
        else if ((restriction == "Non-organic") && (prods[i].organic == false)){
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