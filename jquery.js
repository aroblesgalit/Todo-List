$(document).ready(function () {

    // Target elements
    var todoForm = $("#todo-form");
    var userInput = $("#todoInput");

    // Declare variable for todo list array and set it to an empty array
    var todosArray = [];

    // Add event listener to submit button
    todoForm.on("click", function (e) {
        // prevent default
        e.preventDefault();

        element = e.target;
        // When submit button is clicked
        if (element.value === "Submit") {

            if (userInput.val() !== "") {
            // take value of input and store it inside array
            todosArray.push(userInput.val());
            console.log(todosArray);
            }


        }
    })


    // Store array in localStorage
    // Get array from localStorage
    // Create li element for each item in array

    // Render ui
    // Delete what's in the input field


    // When x button is clicked
    // Find its data index
    // Delete from array
    // Render ui


})