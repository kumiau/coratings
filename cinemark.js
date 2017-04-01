var rating = new Rating;
var movieContainer = document.querySelectorAll(".tb2_new_new_ > table:nth-child(1) > tbody:nth-child(1)").item(0);
var titleRow = movieContainer.querySelectorAll("tr:nth-child(1)").item(0); 
var titleField = titleRow.querySelectorAll("td:nth-child(3)").item(0); 
var movieName = titleField.childNodes[0].nodeValue;

rating.getRating(movieName, (data) => {
  var field = document.createElement("tr");
  var caret= document.createElement("td");
  var label= document.createElement("td");
  var ratingCell= document.createElement("td");
  var caretImg = document.createElement('img');
  caretImg.src = "http://coimages.cinemark.com.co/newface/web/bullet_point.png";


  // Rating label format
  caret.className = 'tex_new_tb';
  label.className = 'td7_new';
  ratingCell.className = 'tex_new_tb';
  field.className = 'corating cinemark';
  caret.appendChild(document.createElement("span").appendChild(caretImg));
  label.appendChild(document.createTextNode('CALIFICACIONES: '))
  field.appendChild(caret);
  field.appendChild(label);
  if(data.Response == "False") {
    ratingCell.appendChild(document.createTextNode('No se encontraron calificaciones para la película "'+movieName+'".'));
  } else {
    ratingCell.appendChild(rating.render(data));
  }
  field.appendChild(ratingCell);
  // movieContainer.appendChild(field);
  movieContainer.insertBefore(field, titleRow);
});

