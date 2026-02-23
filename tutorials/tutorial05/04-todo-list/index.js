function addTodo() {
    var val = document.querySelector("#todoInput").value;
    var htmlgen = "<li>" + val + "</li>"
    document.querySelector("#todoList").insertAdjacentHTML('beforeend', htmlgen)
    document.querySelector("#todoInput").value = "";
  // 1) Get the input element
  // 2) Get the value from the input (use .value property)
  // 3) Get the ul element (the todo list)
  // 4) Use insertAdjacentHTML('beforeend', '<li>...</li>') to add the item
  //    Make sure to include the todo text in the <li>
  // 5) Clear the input field (set .value to empty string)
}