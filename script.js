const product = document.getElementById("addproduct");
const list = document.getElementById("productlist");
const button = document.getElementById("addButton");

button.addEventListener("click", function(event) {
    const newItem = product.value;
    const newEntry = document.createElement("li");
    newEntry.textContent = (`${newItem}`)
    list.appendChild(newEntry);
});

