var rating = new Rating;
var titleField = document.querySelectorAll("div.field-type-text:nth-child(2) > div:nth-child(2) > div:nth-child(1)").item(0);
var movieContainer = document.querySelectorAll("fieldset.fieldgroup:nth-child(1)").item(0);
// var movieContainer = titleField.parentNode;
var movieName = titleField.childNodes[0].nodeValue.trim();

rating.getRating(movieName, (data) => {
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
    field.appendChild(rating.render(data));
  }
  movieContainer.appendChild(field);
  // movieContainer.insertBefore(field, titleField.nextSibling);
});
