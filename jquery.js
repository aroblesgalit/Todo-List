$(document).ready(function () {

    // Target elements
    var todoForm = $("#todo-form");
    var userInput = $("#todoInput");
    var todoList = $("#todo-list");

    // Declare variable for todo list array and set it to an empty array
    var todosArray = [];

    init();

    // Add event listener to submit button
    todoForm.on("submit", function (e) {
        // prevent default
        e.preventDefault();

        var todoText = userInput.val().trim();

        if (userInput.val() !== "") {
            // take value of input and store it inside array
            todosArray.push(todoText);
            // clear the input
            userInput.val("");
        }

        // Store array in localStorage
        storeArray();

        // Render UI
        renderList();

    })

    function storeArray() {
        // Stringify and set todosArray key in localStorage to the todosArray
        localStorage.setItem("todosArray", JSON.stringify(todosArray));
    }


    // Render ui function
    function renderList() {
        // Clear ul
        todoList.html("");

        // Loop through storage array
        for (var i = 0; i < todosArray.length; i++) {
            // Create li element for each item in array
            var todoItemLi = $("<li>").addClass("todo-item").attr("data-index", i);
            // Create delete button
            var deleteButton = $("<i>").addClass("fa fa-times closeButton");
            // Set text to current value and append the button
            todoItemLi.text(todosArray[i]).append(deleteButton);
            // Append to ul
            todoList.append(todoItemLi);
        }

    }

    function init() {
        // Get array from localStorage
        // Parse JSON string to object
        var storageArray = JSON.parse(localStorage.getItem("todosArray"));

        // If array were retrieved from localStorage, update the todos array to it
        if (storageArray !== null) {
            todosArray = storageArray;
        }

        // Render array to the DOM
        renderList();
    }



    // When x button is clicked
    // Find its data index
    // Delete from array
    // Render ui


})