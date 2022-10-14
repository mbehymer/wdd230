const itemList = document.querySelector("ul");
const itemBtn = document.querySelector("#create");
const input = document.querySelector("input");
itemBtn.addEventListener("click", ()=> {
    let newItem = document.createElement("li");
    let itemText = input.value;
    if (itemText === "") {return;}

    console.log(itemText);

    
    newItem.innerHTML = `<span class='item-content'>${itemText}</span> `;

    const deleteBtn = document.createElement("button");
    deleteBtn.ariaLabel = `Delete ${itemText}`
    deleteBtn.innerHTML = "&#10060;";
    
    deleteBtn.addEventListener("click", ()=> {
        newItem.remove();
        
        //Send Focus to input
        input.focus();
        
    })
    
    newItem.appendChild(deleteBtn);
    
    itemList.appendChild(newItem);

    input.value = "";
    //Send Focus to input
    input.focus();
});
