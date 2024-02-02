// A global cart object to keep track of added items
var cart = {};

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
function populateListProductChoices(selectionId, listId) {
    let listElement = document.getElementById(listId);
    let selectionElem = document.getElementById(selectionId);

    listElement.innerHTML = ''; // Clear product list before filling it

    filteredProducts = restrictListProducts(products, selectionElem.value);
    console.log(filteredProducts);

    // Sort the filtered products by price
    filteredProducts.sort(function (x,y) {
        return x.price - y.price;
    });

    // Add each product to the product selection page
    for (let productId in filteredProducts) {
        let product = filteredProducts[productId];
        let productName = product.name;
        let productPrice = formatPrice(product.price);

        // Create product container
        let productContainer = document.createElement('div');
        productContainer.classList.add('product-item');

        // Product name div
        let productNameDiv = document.createElement('div');
        productNameDiv.textContent = productName;
        productNameDiv.classList.add('product-name');

        // Product price div
        let productPriceDiv = document.createElement('div');
        productPriceDiv.textContent = `$${productPrice}`;
        productPriceDiv.classList.add('product-price');

        // Counter and buttons div
        let counterDiv = document.createElement('div');
        counterDiv.classList.add('counter');

        // Counter span
        let counterSpan = document.createElement('span');
        counterSpan.id = 'count-' + productName;
        counterSpan.textContent = '0'; // Start with zero count
        counterSpan.classList.add('counter-span');

        // Add and subtract buttons
        let addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('add-button');
        addButton.onclick = function() { addToCart(productName, product.price); };

        let subtractButton = document.createElement('button');
        subtractButton.textContent = '-';
        subtractButton.classList.add('subtract-button');
        subtractButton.onclick = function() { removeFromCart(productName); };

        // Assemble counterDiv
        counterDiv.appendChild(subtractButton);
        counterDiv.appendChild(counterSpan);
        counterDiv.appendChild(addButton);

        // Assemble productContainer
        productContainer.appendChild(productNameDiv);
        productContainer.appendChild(productPriceDiv);
        productContainer.appendChild(counterDiv);

        // Append productContainer to listElement
        listElement.appendChild(productContainer);
    }
}

// Function to handle adding items to the cart
function addToCart(productName, price) {
    if (!cart[productName]) {
        cart[productName] = { count: 0, price: price };
    }
    cart[productName].count++;
    console.log('Adding to cart:', productName, 'New count:', cart[productName].count); // Debug log
    updateCounterDisplay(productName);
}

// Function to handle removing items from the cart
function removeFromCart(productName) {
    if (cart[productName] && cart[productName].count > 0) {
        cart[productName].count--;
        console.log('Removing from cart:', productName, 'New count:', cart[productName].count); // Debug log
        updateCounterDisplay(productName);
    }
}

// Function to update the counter display for a product
function updateCounterDisplay(productName) {
    var counterElement = document.getElementById('count-' + productName);
    if (counterElement) {
        console.log('Updating UI for:', productName, 'Count:', cart[productName].count); // Debug log
        counterElement.textContent = cart[productName].count;
    }
}


// Build cart page when items are added to cart
function selectedItems(){
    var cartElement = document.getElementById('displayCart');
    cartElement.innerHTML = "";
    
    var para = document.createElement("p");
    para.innerHTML = "You selected: ";
    para.appendChild(document.createElement("br"));

    var totalPrice = 0;

    for (var item in cart) {
        if (cart[item].count > 0) {
            para.appendChild(document.createTextNode(item + " x " + cart[item].count));
            para.appendChild(document.createElement("br"));
            totalPrice += cart[item].count * cart[item].price;
        }
    }
    
    // add paragraph and total price
    cartElement.appendChild(para);
    cartElement.appendChild(document.createTextNode("Total Price is $" + totalPrice.toFixed(2)));
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
