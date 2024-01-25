function renderProductList() {
    let displayProductElement = document.getElementById('displayProduct');

    displayProductElement.innerHTML = ''; // Clear product list
    
    // Add each product to the product selection page
    for (let productId in products) {

        let product = products[productId];

        // Create the checkbox/input element
        let productCheckbox = document.createElement('input');

        // Set the attributes to created checkbox
        productCheckbox.type = "checkbox";
        productCheckbox.id = productId;
        productCheckbox.value = product.name;

        // Create checkbox label
        let productLabel = document.createElement('label');
        productLabel.for = productId;

        // Create text for checkbox label and attach to label
        let productLabelText = document.createTextNode(product.name);
        productLabel.appendChild(productLabelText);

        // Add elements to page
        displayProductElement.appendChild(productCheckbox);
        displayProductElement.appendChild(productLabel);
        displayProductElement.appendChild(document.createElement('br')); // Add a line break
    }
}

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

    renderProductList();
});