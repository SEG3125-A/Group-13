function openInfo(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Optional: Add this to handle the default active tab on page load
document.addEventListener('DOMContentLoaded', (event) => {
    // Open the first tab by default
    document.querySelector('.tablinks').click();
});

// Populate the products list based on the dietary restrictions chosen
function populateListProductChoices(listId) {
    let listElement = document.getElementById(listId);
    //let selectionElem = document.getElementById(selectionId);

    listElement.innerHTML = ''; // Clear product list before filling it

    filteredProducts = restrictListProducts(products);
    console.log(filteredProducts);

    // Sort the filtered products by price
    filteredProducts.sort(function (x,y) {
        return x.price - y.price;
    });
    
    // Add each product to the product selection page
    for (let productId in filteredProducts) {

        let productName = filteredProducts[productId].name;
        let productPrice = formatPrice(filteredProducts[productId].price);
        
        // Create the checkbox/input element
        let productCheckbox = document.createElement('input');

        // Set the attributes to created checkbox
        productCheckbox.type = 'checkbox';
        productCheckbox.id = productName;
        productCheckbox.name = 'product';
        productCheckbox.value = productName;

        // Create checkbox label
        let productLabel = document.createElement('label');
        //productLabel.htmlFor = productName;
        let productNamePrice = productName + " $" + productPrice;
        productLabel.htmlFor = productNamePrice;

        // Create text for checkbox label and attach to label
        let productLabelText = document.createTextNode(productNamePrice);
        productLabel.appendChild(productLabelText);

        // Add elements to HTML DOM
        listElement.appendChild(productCheckbox);
        listElement.appendChild(productLabel);
        listElement.appendChild(document.createElement('br')); // Add a line break
    }
}

// Build cart page when items are added to cart
function selectedItems(){
	var products = document.getElementsByName("product");
	var chosenProducts = [];
	
	var cart = document.getElementById('displayCart');
	cart.innerHTML = "";
	
	// Build list of selected item
	var para = document.createElement("p");
	para.innerHTML = "You selected: ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < products.length; i++) { 
		if (products[i].checked) {
			para.appendChild(document.createTextNode(products[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(products[i].value);
		}
	}
		
	// add paragraph and total price
	cart.appendChild(para);
	cart.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

function formatPrice(productPrice) {
    formattedString = new String(productPrice);
    
    // The price is a whole number (ex: 10)
    if (formattedString.indexOf(".") < 0) {
        formattedString += ".00";
    }

    // The price has two decimal places (ex: 10.67), no change
    else if (formattedString.indexOf(".") == (formattedString.length - 3)) {
    	return formattedString;
    }

    // The price has only one decimal place (ex 10.6)
    else if (formattedString.indexOf(".") == (formattedString.length - 2)) {
        formattedString += "0";
    }

    return formattedString;
}