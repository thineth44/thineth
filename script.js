 // script.js

let items = [];
let totalAmount = 0;

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value, 10);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemName && itemQuantity && itemPrice) {
        const itemTotal = itemQuantity * itemPrice;
        items.push({ name: itemName, quantity: itemQuantity, price: itemPrice, total: itemTotal });
        totalAmount += itemTotal;
        displayItems();

        // Clear input fields
        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
        document.getElementById('item-price').value = '';
    } else {
        alert("Please fill out all item fields.");
    }
}

function displayItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '<h3>Items:</h3>';
    items.forEach((item, index) => {
        itemsList.innerHTML += `<p>${index + 1}. ${item.name} - ${item.quantity} x LKR ${item.price.toFixed(2)} = LKR ${item.total.toFixed(2)}</p>`;
    });
}

function generateBill() {
    const customerName = document.getElementById('customer-name').value;

    if (customerName && items.length > 0) {
        document.getElementById('output-customer-name').innerText = `Customer: ${customerName}`;

        const outputItems = document.getElementById('output-items');
        outputItems.innerHTML = '<h3>Items:</h3>';
        items.forEach((item, index) => {
            outputItems.innerHTML += `<p>${index + 1}. ${item.name} - ${item.quantity} x LKR ${item.price.toFixed(2)} = LKR ${item.total.toFixed(2)}</p>`;
        });

        document.getElementById('output-total').innerText = totalAmount.toFixed(2);

        document.getElementById('bill-output').style.display = 'block';
    } else {
        alert("Please fill out the customer name and add at least one item.");
    }
}

function closeModal() {
    document.getElementById('bill-output').style.display = 'none';
}

function printBill() {
    window.print();
}

// Calculator functionality
function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function deleteDigit() {
    const display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    const display = document.getElementById('calc-display');
    display.value += character;
}

function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value).toFixed(2);
    } catch (e) {
        display.value = 'Error';
    }
}
 