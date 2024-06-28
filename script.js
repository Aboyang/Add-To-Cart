const addBtn = document.getElementById("add-button")
const logInput = document.getElementById("input-field")
const itemList = document.getElementById("list-of-items")

window.onload = function initDB(){

    itemArray = Object.values(localStorage)

    for(let i = 0; i < localStorage.length; i++){
        itemList.innerHTML += itemArray[i]
    }

    for(let i = 0; i < itemList.children.length; i++){
        waitForRemoval(itemList.children[i])
    } 

    //me and addy cant figure out why the event-listener has to be separately added (like opening a new loop)    
}


// ()=> shorthand for function, whereby () is for the attributes
addBtn.onclick = ()=> { 

    let inputValue = logInput.value.trim()
    clearInputField()

    if(inputValue == ""){
        alert("No item entered...")
        return
    }
    
    addToList(inputValue)

}


function addToList(item){
    // itemList.innerHTML += `<li>${item}</li>`

    let newElement = document.createElement("li")
    newElement.textContent = item
    itemList.append(newElement)

    addToDB(newElement)

    waitForRemoval(newElement)
}

function waitForRemoval(item) {
    item.addEventListener("dblclick", ()=>{
        console.log(item.outerHTML)
        removeFromDB(item)
        item.remove()
    })
    
}

function clearInputField(){
    logInput.value = ""
}

function addToDB(item){
    let itemKey = Date.now()
    item.id = itemKey
    localStorage.setItem(itemKey, item.outerHTML)
}

function removeFromDB(item){
    localStorage.removeItem(item.id)
}

