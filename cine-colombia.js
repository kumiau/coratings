var rating = new Rating;
var titleField = document.getElementsByClassName('field-name-field-titulo-original').item(0); 
var movieContainer = titleField.parentNode;
// var releaseDateField = document.getElementsByClassName('field field-name-field-fecha-estreno').item(0); 
var movieName = titleField.childNodes[1].nodeValue;
// var releaseYear = releaseDateField.textContent.match(/[0-9]{4}/);
rating.getRating(movieName, (data) => {
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
    field.appendChild(rating.render(data));
  }
  // movieContainer.appendChild(field);
  movieContainer.insertBefore(field, titleField.nextSibling);
});
