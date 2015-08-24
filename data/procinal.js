var request = new XMLHttpRequest();
var titleField = document.querySelectorAll("div.field-type-text:nth-child(2) > div:nth-child(2) > div:nth-child(1)").item(0);
var movieContainer = document.querySelectorAll("fieldset.fieldgroup:nth-child(1)").item(0);
// var movieContainer = titleField.parentNode;
var movieName = titleField.childNodes[0].nodeValue.trim();
console.log('http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&y=&tomatoes=true&r=json&type=movie');
request.open('GET', 'http://www.omdbapi.com/?t='+encodeURIComponent(movieName)+'&y=&tomatoes=true&r=json&type=movie', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var label= document.createElement("div");
    var field = document.createElement("div");

    // Rating label format
    label.className = 'field-label';
    field.className = 'field field-type-text field-field-sinopsis-pelicula corating procinal';
    label.appendChild(document.createTextNode('Calificaciones: '))
    field.appendChild(label);
    if(data.Response == "False") {
      field.appendChild(document.createTextNode('No se encontraron calificaciones para la película "'+movieName+'".'));
    } else {
      field.appendChild(ratingRender(data));
    }
    movieContainer.appendChild(field);
    // movieContainer.insertBefore(field, titleField.nextSibling);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
