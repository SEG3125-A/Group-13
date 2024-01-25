function populateListProductChoices(selectionId, listId) {
    let listElement = document.getElementById(listId);
    let selectionElem = document.getElementById(selectionId);

    listElement.innerHTML = ''; // Clear product list before filling it

    filteredProducts = restrictListProducts(products, selectionElem.value);
    console.log(filteredProducts);
    
    // Add each product to the product selection page
    for (let productId in filteredProducts) {

        let productName = filteredProducts[productId];
        
        // Create the checkbox/input element
        let productCheckbox = document.createElement('input');

        // Set the attributes to created checkbox
        productCheckbox.type = "checkbox";
        productCheckbox.id = productName;
        productCheckbox.value = productName;

        // Create checkbox label
        let productLabel = document.createElement('label');
        productLabel.htmlFor = productName;

        // Create text for checkbox label and attach to label
        let productLabelText = document.createTextNode(productName);
        productLabel.appendChild(productLabelText);

        // Add elements to HTML DOM
        listElement.appendChild(productCheckbox);
        listElement.appendChild(productLabel);
        listElement.appendChild(document.createElement('br')); // Add a line break
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
});