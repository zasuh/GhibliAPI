var request = new XMLHttpRequest();
// Assigning the value of the request to the variable

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// Opening and GETTING the request for the API endpoint

request.onload = function () {
    //JSON Data access begins here

}

request.send();
// Sending the request