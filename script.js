const product = document.getElementById("addproduct");
const list = document.getElementById("productlist");
const button = document.getElementById("addButton");

button.addEventListener("click", function(event) {
    const newItem = product.value;
    const newEntry = document.createElement("li");
    newEntry.textContent = (`${newItem}`);
    const removeItem = document.createElement("button");
    removeItem.textContent = ("Remove"); 
    list.appendChild(newEntry);
    newEntry.appendChild(removeItem);
    product.value = "";
});

button.removeEventListener("click", function(event) { 
    newEntry.remove();
});

 /*button.removeEventListener("click", function(event) {
    const newItem = product.value;
    const newEntry = document.createElement("li");
    newEntry.textContent = (`${newItem}`)
    list.appendChild(newEntry);
    product.value = "";
    button.removeEventListener("click", handleClick);
})*/