var products = [
    {
        name: "Broccoli",
        category: "veggie",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: true, 
        price: 1.99,
        image: "images/Broccoli.jpg"
    },
    {
        name: "Whole Wheat Bread",
        category: "other",
        vegetarian: true,
        glutenFree: false,
        both: false,
        organic: false, 
        price: 2.35,
        image: "images/Whole Wheat Bread.jpg"
    },
    {
        name: "Salmon",
        category: "meat",
        vegetarian: false,
        glutenFree: true,
        both: false,
        organic: true, 
        price: 10.00,
        image: "images/Salmon.jpg"
    },
    {
        name: "Steak",
        category: "meat",
        vegetarian: false,
        glutenFree: true,
        both: false,
        organic: false, 
        price: 12.99,
        image: "images/Steak.png"
    },
    {
        name: "Apples",
        category: "fruit",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: true, 
        price: 3.49,
        image: "images/apples.jpg"
    },
    {
        name: "Jasmine Rice",
        category: "other",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: false, 
        price: 0.99,
        image: "images/Jasmine Rice.png"
    },
    {
        name: "Peanut Butter",
        category: "other",
        vegetarian: true,
        glutenFree: false,
        both: false,
        organic: true, 
        price: 5.99,
        image: "images/Peanut Butter.png"
    },
    {
        name: "Almond Milk",
        category: "other",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: false, 
        price: 2.99,
        image: "images/Almond milk.png"
    },
    {
        name: "Chicken Breast",
        category: "meat",
        vegetarian: false,
        glutenFree: true,
        both: false,
        organic: true, 
        price: 9.50,
        image: "images/Chicken Breast.png"
    },
    {
        name: "Cheese",
        category: "dairy",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: false, 
        price: 4.50,
        image: "images/Cracker Barrel Marble.jpg"
    },
    {
        name: "Spaghetti",
        category: "other",
        vegetarian: true,
        glutenFree: false,
        both: false,
        organic: false,
        price: 1.27,
        image:"images/Spaghetti.png"
    },
    {
        name: "Oranges",
        category: "fruit",
        vegetarian: true,
        glutenFree: true,
        both: true,
        organic: true,
        price: 3.49,
        image:"images/Oranges.png"
    }
];

// Returns a list of products filtered by dietary restrictions and filters
function restrictListProducts(prods) {
    let dietRestriction = document.getElementById('dietSelect').value;

    // querySelector code used from: https://www.tutorialspoint.com/how-to-get-value-of-selected-radio-button-using-javascript
    let organicRestriction = document.querySelector('input[type=radio][name="organicSelect"]:checked').value;

    let fruitChecked = document.getElementById('categoryFruit').checked;
    let veggieChecked = document.getElementById('categoryVeggie').checked;
    let meatChecked = document.getElementById('categoryMeat').checked;
    let dairyChecked = document.getElementById('categoryDairy').checked;
    let otherChecked = document.getElementById('categoryOther').checked;

	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

        /* Using guard clauses for filtering is easier to maintain */

        /* Dietary Preference Filter */
		if ((dietRestriction == "Vegetarian") && !(prods[i].vegetarian == true)){
			continue;
		}
		else if ((dietRestriction == "GlutenFree") && !(prods[i].glutenFree == true)){
			continue;
		}
        else if ((dietRestriction == "Vegetarian & GlutenFree") && !(prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			continue;
		}
        
        /* Organic Filter */
        if ((organicRestriction == "Organic") && !(prods[i].organic == true)){
			continue;
		}
        else if ((organicRestriction == "Non-organic") && !(prods[i].organic == false)){
			continue;
		}

        /* Product Category Filter */
        if ((prods[i].category == "fruit") && !(fruitChecked)) {
            continue;
        }
        
        if ((prods[i].category == "veggie") && !(veggieChecked)) {
            continue;
        }
        
        if ((prods[i].category == "meat") && !(meatChecked)) {
            continue;
        }
        
        if ((prods[i].category == "dairy") && !(dairyChecked)) {
            continue;
        }

        if ((prods[i].category == "other") && !(otherChecked)) {
            continue;
        }

        product_names.push(prods[i]); // It has not been caught by any of the filters above; add it to the list
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