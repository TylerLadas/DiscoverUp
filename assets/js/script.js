// Global variables

// Array variable
let searchArray;
// Check local storage for saved array items, if present array = localstorage if empty  array = []
if (localStorage.getItem('saved')) {
    searchArray = JSON.parse(localStorage.getItem('saved'));
} else {
    searchArray = [];
}

// Create local storage key to hold array items
localStorage.setItem('saved', JSON.stringify(searchArray));

// Declare variable to hold parsed local storage data
const savedSearches = JSON.parse(localStorage.getItem('saved'));

// Create function to push new values to array and then set to local storage

// Function to dynamically create new local storage items (buttons?)

// Loop through array (.foreach)

// Clear storage button

// Event listeners