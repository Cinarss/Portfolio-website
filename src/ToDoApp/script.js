const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

loadItems();

addEventListener();

function addEventListener() {

  form.addEventListener("submit", addNewItem);
  btnDeleteAll.addEventListener("click", deleteAllItems);
  taskList.addEventListener("click", deleteItem);
}

function loadItems(){
    items = getItemsFromLS();
    items.forEach(function(item){
        createItem(item);
    });
}

function getItemsFromLS(){
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function setItemToLS(text){
    items = getItemsFromLS();

    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
    
}


function createItem(text){
    const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  const a = document.createElement("a");
  a.className = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);

  taskList.appendChild(li);
}

function addNewItem(e) {
    if (input.value === "") {
        alert("Add New Task !");
  }

  
  createItem(input.value);

  setItemToLS(input.value)
  //Keycode için önemli bir kod !!!!!!!!!!
  input.value = "";
  e.preventDefault();
}

function deleteItem(e) {
    
    
  if (e.target.className === "fas fa-times") {
    if(confirm('Are You Sure ?'))
    e.target.parentElement.parentElement.remove();

    deleteItemFromLS(e.target.parentElement.parentElement.textContent);


  }
  e.preventDefault();
}

function deleteAllItems(e) {
    

    if(confirm('Are You Sure ?')){

        taskList.innerHTML = "";
    }
    localStorage.clear();

  e.preventDefault();
}
