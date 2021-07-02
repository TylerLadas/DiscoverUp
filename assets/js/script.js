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
//Confirm variable names to extract value from
function setStorage() {
    searchArray.push(search.value) 
    localStorage.setItem('saved', JSON.stringify(searchArray))   
};

// Handler function for click events
function handler(event) {
    event.preventDefault;
    // add location values
    // run fetch function
}

// Function to dynamically create new local storage items (buttons?)
function createButton(text) {
let savedBtn = document.createElement("button");
savedBtn.textContent = text
savedBtn.className = "savedBtn";
savedBtn.setAttribute("type", "submit")
savedBtn.setAttribute("value", text);
savedBtn.addEventListener("click", handler)
savedContainer.appendChild(savedBtn);
};

// Loop through array on pag load and render saved buttons
searchArray.forEach(function(item) {
    createButton(item)
}); 

// Event listeners

// submit/search button listener


// saved button listener


// clear search button listener
createButton.addEventListener('click', function() {
    localStorage.clear
    // insert code to remove html from saved container
})