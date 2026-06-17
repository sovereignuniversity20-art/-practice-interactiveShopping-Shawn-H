const product = document.getElementById("addproduct");
const list = document.getElementById("productlist");
const button = document.getElementById("addButton");

button.addEventListener("click", function(event) {
    const newItem = product.value;
    const newEntry = document.createElement("li");
    const newInfo = document.createElement("span");
    newInfo.textContent = (newItem);
    newEntry.appendChild(newInfo);
    const removeItem = document.createElement("button");
    const editItem = document.createElement("button");
    removeItem.textContent = ("Remove"); 
    editItem.textContent = ("Edit");
    list.appendChild(newEntry);
    newEntry.appendChild(removeItem);
    newEntry.appendChild(editItem);
    product.value = "";
    let isEditing = false;
    let editedItem;
removeItem.addEventListener("click", function(event) {
    newEntry.remove();
    })

editItem.addEventListener("click", function(event) {
    
    if (isEditing === false) {
        editedItem = document.createElement("textarea");
        editedItem.value = newInfo.textContent;
        newEntry.appendChild(editedItem);
        editItem.textContent = ("Save");
        isEditing = true;
    } else {
        newInfo.textContent = editedItem.value;
        editedItem.remove();
        editItem.textContent = ("Edit");  
        isEditing = false;
    }
});    
});
//editItem.textContent = ("Save");
    //newEntry.appendChild(editedItem);

    //editItem.addEventListener("click", function(event)  {
    //newInfo.textContent = editedItem.value; 
    //editedItem.remove(); 
    //editItem.textContent = ("Edit");  
 
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

