class Rating {
  constructor() {
    console.log('object created');
  }
  getRating (movieName, callback) {
    var request = new XMLHttpRequest();
    console.log('http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&y=&tomatoes=true&r=json&type=movie');
    request.open('GET', 'http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&y=&tomatoes=true&r=json&type=movie', true);
    console.log(this);
    request.onload = function(data) {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        callback(data);
      } else {
        return false
      }
    }
    request.onerror = function() {
      // There was a connection error of some sort
        console.log('error');
    };

    request.send();
  }
  render (queryResult) {
    console.log('render');
    var tomatoesText;
    var imdbText;
    var container = document.createElement("div");
    var link= document.createElement("a");
    var tomatoesDiv = document.createElement("div");
    var imdbDiv = document.createElement("div");
    var tomatoesImg = document.createElement('img');
    var imdbImg = document.createElement('img');
    var linkText = document.createTextNode(queryResult.Title+'('+queryResult.Year+')');

    tomatoesText= document.createTextNode((queryResult.tomatoMeter === "N/A")? "No se encontraron reseñas" : queryResult.tomatoMeter+'% ('+queryResult.tomatoReviews+' reseñas)');
    imdbText= document.createTextNode((queryResult.imdbRating === "N/A")? "No se encontraron calificaciones" : queryResult.imdbRating+'/10 ('+queryResult.imdbVotes+' calificaciones)');
    container.className = 'rating-container';
    if(queryResult.tomatoImage == 'rotten') {
      tomatoesImg.setAttribute("src", "http://www.rottentomatoes.com/static/images/icons/splat-16.png");
    } else if (queryResult.tomatoImage == 'certified'){
      tomatoesImg.setAttribute("src", "http://www.rottentomatoes.com/static/images/icons/CF_16x16.png");
    } else {
      tomatoesImg.setAttribute("src", "http://www.rottentomatoes.com/static/images/icons/fresh-16.png");
    }

    imdbImg.setAttribute("src", "http://g-ecx.images-amazon.com/images/G/01/imdb/plugins/rating/images/imdb_31x14.png");

    tomatoesDiv.appendChild(tomatoesImg);
    tomatoesDiv.appendChild(tomatoesText);
    link.appendChild(linkText);
    link.href = 'http://imdb.com/title/'+queryResult.imdbID;
    imdbDiv.appendChild(imdbImg); 
    imdbDiv.appendChild(imdbText); 
    container.appendChild(imdbDiv);
    container.appendChild(tomatoesDiv);
    container.appendChild(link);
    return(container);
  }
}
