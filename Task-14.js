// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with id 'myButton'
    var button = document.getElementById('myButton');

    // Get the element with id 'myDiv'
    var div = document.getElementById('myDiv');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Change the text content of the div when the button is clicked
        div.textContent = 'Text Changed!';
    });
});
