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

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
        else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}