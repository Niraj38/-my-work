// Get references to the button and paragraph elements
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Define the function to be executed on click
function handleClick() {
    message.textContent = 'Button was clicked!';
}

// Attach the click event listener to the button
button.addEventListener('click', handleClick);
