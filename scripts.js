const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
// Appending both elements to the app root

var request = new XMLHttpRequest();
// Assigning the value of the request to the variable

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// Opening and GETTING the request for the API endpoint

request.onload = function () {
    //JSON Data access begins here
    var data = JSON.parse(this.response);
    // Access the JSON data
    
    if (request.status >= 200 && request.status < 400){
        data.forEach(movie => {
            //Create a div
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //Header for movie title and context
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //Movie description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // 300 char limit
            p.textContent = '${movie.description}...';

            //Appending the cards to the container element.
            container.appendChild(card);

            //Each card container a movie title and description
            card.appendChild('h1');
            card.appendChild('p');
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();
// Sending the request

