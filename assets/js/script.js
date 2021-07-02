//Execute search api for Events & Restos
function lookUp() {

var citySearch = document.getElementById('searchCity').value;
var zipSearch  = document.getElementById('searchZip').value;
var offSearch  = document.getElementById('searchRadius').value;

console.log("City: "+citySearch+" Postal Code: "+zipSearch+" Within "+offSearch+" km");


};

var eventArr = [];
var apiResto = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=ottawa';
var apiEvent = 'https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?city=ottawa&apikey=LVPi9sXqgdQ58cdxQJV9G5220uffRerh';


fetch(apiEvent) 
    
    //headers: {
    // 'Authorization':'Bearer LVPi9sXqgdQ58cdxQJV9G5220uffRerh',
 //}

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
                // Store each business's object in a variable
                var eId = item.id;
                var eUrl = item.url;
                var eName = item.name;

                
               
                // Append our result into our page
                console.log(eName[0]);
                $('#responseEvents').append('<div id="' +
                  eId + '"> Name: ' +
                  eName + ' Website: <a href="' +
                  eUrl + '">Click</a></div>');
          });

       
        // Grab the results from the API JSON return
    } 

    });     

fetch(apiResto, {
    
    headers: {
     'Authorization':'Bearer 6hxmQPOKdlDPYMmYwZG-1Pf3M3WRSDx8fWmaiFrtBOmsgBjLFAlrLjyGgO1hqdBJwixNHpGAUD7y8LXpb371w-zua6t8fkEeYS74i9cKj_UolOYtOHJyw5K7jgTdYHYx',
 }
})
    .then(function(response) {

        return response.json();
    })
    .then(function(response) {
        //Console logs results from API JSON
        console.log(response);
        var totalRes = response.total;
        console.log(totalRes);
        if (totalRes > 0 ){
            $.each(response.businesses, function(i, item) {
                // Store each business's object in a variable
                var id = item.id;
                var alias = item.alias;
                var phone = item.display_phone;
                var image = item.image_url;
                var name = item.name;
                var rating = item.rating;
                var reviewcount = item.review_count;
                var address = item.location.address1;
                var city = item.location.city;
                var state = item.location.state;
                var zipcode = item.location.zip_code;
                var rUrl = item.url;
                // Append our result into our page
                $('#responseRestos').append('<div id="' +
                    id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + 
                    image + '" style="width:200px;height:150px;"><br>We found <b>' + 
                    name + '</b> (' + alias + ')<br>Business ID: ' + 
                    id + '<br> Located at: ' + 
                    address + ' ' + 
                    city + ', ' + 
                    state + ' ' + 
                    zipcode + '<br>The phone number for this business is: ' + 
                    phone + '<br>This business has a rating of ' + 
                    rating + ' with ' + 
                    reviewcount + ' reviews. <br> Website: <a href="' +
                    rUrl + '">Click here</a></div>');
          });

       
        // Grab the results from the API JSON return
    } 

    });     