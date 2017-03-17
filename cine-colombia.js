var request = new XMLHttpRequest();
var titleField = document.getElementsByClassName('field-name-field-titulo-original').item(0); 
var movieContainer = titleField.parentNode;
// var releaseDateField = document.getElementsByClassName('field field-name-field-fecha-estreno').item(0); 
var movieName = titleField.childNodes[1].nodeValue;
// var releaseYear = releaseDateField.textContent.match(/[0-9]{4}/);
console.log('http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&y=&tomatoes=true&r=json&type=movie');
request.open('GET', 'http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&y=&tomatoes=true&r=json&type=movie', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var label= document.createElement("div");
    var field = document.createElement("div");


    // Rating label format
    label.className = 'label-above';
    field.className = 'field-name-field-sinopsis corating cine-colombia';
    label.appendChild(document.createTextNode('Calificaciones: '))
    field.appendChild(label);
    if(data.Response == "False") {
      field.appendChild(document.createTextNode('No se encontraron calificaciones para la película "'+movieName+'".'));
    } else {
      field.appendChild(ratingRender(data));
    }
    // movieContainer.appendChild(field);
    movieContainer.insertBefore(field, titleField.nextSibling);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
