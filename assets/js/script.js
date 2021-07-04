var citySearch = document.getElementById('searchCity');
var searchBtn = document.getElementById("search");
var searchForm = document.getElementById("searchForm");
var savedContainer = document.getElementById("savedContainer");
var clearBtn = document.getElementById("clearBtn");
let cityValue;
// var zipSearch  = document.getElementById('searchZip').value;
// var offSearch  = document.getElementById('searchRadius').value;

//Execute search api for Events & Restos
function lookUp(city) {

var apiResto = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=';
var apiEvent = 'https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?size=5&';
var eApiKey  = 'LVPi9sXqgdQ58cdxQJV9G5220uffRerh';

fetch(apiEvent + 'city=' + city + '&apikey=' + eApiKey) 
    
    .then(function(response) {

        return response.json();
    })

    .then(function(response) {
        //Console logs results from API JSON
        console.log(response);
        var totalRes = response.page.size;
        console.log(totalRes);
        if (totalRes > 0 ){
            $.each(response._embedded.events, function(i, item) {
                // Initial response values stored into variables
                var eId = item.id;
                // Pick first image to display
                //var eImageArr = JSON.parse(item.images);
                var eImage = item.images[0].url;
                
                var eName = item.name;
                //Store date [Option to use Moment to format]
                var eDate = moment(item.dates.start.localDate).format('MMM Do, YYYY');
                
                //Store time [Option to use Moment to format]
                var eTime = moment(item.dates.start.dateTime).format('hh:mm a');

                var eInfo = item.info;
        
                // Displaying results in page
                //console.log(eName[0]);
                $('#responseEvents').append('<div id="' +
                  eId + '" style="margin-top:50px;margin-bottom:50px;"> <img src="' +
                  eImage + '"style="width:200px;height:150px;"><br>Name: ' +
                  eName + ' On: ' +
                  eDate + ' at ' + 
                  eTime + '<br>' +                  
                  'Description: ' + eInfo +'<button id="a' +
                  eId + '">More Info</button><br></br></div>');
                  var aId ="a"+eId;
                  if (aId.onclick) {
                     $(eid).append('<div>Hello trial</div>');
                  }
                
                
                //return fetch(
                  //  'https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events/' +
                    //eId + '.json?city=ottawa&apikey=LVPi9sXqgdQ58cdxQJV9G5220uffRerh');
                //.then(function(dResponse) {
                  //  return response.json();
                //})


          });

       
        
        } else {
        //if totalRes = 0
        $('#responseEvents').append('<div> No event listings in your area at this time. </div>');
        }
    });     

};    
// fetch(apiResto, {
    
//     headers: {
//      'Authorization':'Bearer 6hxmQPOKdlDPYMmYwZG-1Pf3M3WRSDx8fWmaiFrtBOmsgBjLFAlrLjyGgO1hqdBJwixNHpGAUD7y8LXpb371w-zua6t8fkEeYS74i9cKj_UolOYtOHJyw5K7jgTdYHYx',
//  }
// })
//     .then(function(response) {

//         return response.json();
//     })
//     .then(function(response) {
//         //Console logs results from API JSON
//         console.log(response);
//         var totalRes = response.total;
//         console.log(totalRes);
//         if (totalRes > 0 ){
//             $.each(response.businesses, function(i, item) {
//                 // Store each business's object in a variable
//                 var id = item.id;
//                 var alias = item.alias;
//                 var phone = item.display_phone;
//                 var image = item.image_url;
//                 var name = item.name;
//                 var rating = item.rating;
//                 var reviewcount = item.review_count;
//                 var address = item.location.address1;
//                 var city = item.location.city;
//                 var state = item.location.state;
//                 var zipcode = item.location.zip_code;
//                 var rUrl = item.url;
//                 // Append our result into our page
//                 $('#responseRestos').append('<div id="' +
//                     id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + 
//                     image + '" style="width:200px;height:150px;"> We found <b>' + 
//                     name + '</b> (' + alias + ')<br>Business ID: ' + 
//                     id + '<br> Located at: ' + 
//                     address + ' ' + 
//                     city + ', ' + 
//                     state + ' ' + 
//                     zipcode + '<br>The phone number for this business is: ' + 
//                     phone + '<br>This business has a rating of ' + 
//                     rating + ' with ' + 
//                     reviewcount + ' reviews. <br> Website: <a href="' +
//                     rUrl + '">Click here</a></div>');
//           });

       
//         // Grab the results from the API JSON return
//     } 

    // });     

// Global variables

// Array variable
let searchArray;

// // Check local storage for saved array items, if present array = localstorage if empty  array = []
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
    searchArray.push(citySearch.value) 
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

// Loop through array on page load and render saved buttons
searchArray.forEach(function(item) {
    createButton(item)
}); 

// // Event listeners

// submit/search button listener
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    cityValue = citySearch.value;
    if (cityValue === "") {
        alert("Please enter a city name!")
        return
    }
    console.log(cityValue);
    lookUp(cityValue);
    setStorage();
    JSON.parse(localStorage.getItem('saved'))
    createButton(cityValue);
    citySearch.value = "";
});

// saved button listener
$(".savedBtn").click(handler);

// clear search button listener
clearBtn.addEventListener('click', function() {
    localStorage.clear();
    // insert code to remove html from saved container
    savedContainer.innerHTML = "";
})
