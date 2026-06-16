const product = document.getElementById("addproduct");
const list = document.getElementById("productlist");
const button = document.getElementById("addButton");

button.addEventListener("click", function(event) {
    const newItem = product.value;
    const newEntry = document.createElement("li");
    newEntry.textContent = (`${newItem}`);
    const removeItem = document.createElement("button");
    const editItem = document.createElement("button");
    removeItem.textContent = ("Remove"); 
    editItem.textContent = ("Edit");
    list.appendChild(newEntry);
    newEntry.appendChild(removeItem);
    newEntry.appendChild(editItem);
    product.value = "";

removeItem.addEventListener("click", function(event) {
    newEntry.remove();
})});

/*editItem.addEventListener("click", fucntion(event) {
  //  newEntry.textContent = (`${newItem}`);
});


 /*button.removeEventListener("click", function(event) {
    const newItem = product.value;
    const newEntry = document.createElement("li");
    newEntry.textContent = (`${newItem}`)
    list.appendChild(newEntry);
    product.value = "";
    button.removeEventListener("click", handleClick);
})*/