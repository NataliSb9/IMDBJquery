
class Professional {
  constructor(
    name,
    age,
    genre,
    weight,
    height,
    hairColor,
    eyeColor,
    race,
    isRetired,
    nationality,
    oscarsNumber,
    profession,
    photo
  ) {
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.weight = weight;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.race = race;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.photo = photo;
  }
  mostrarDatos() {
    console.log(" - Name: " + this.name);
    console.log(" - Age: " + this.age);
    console.log(" - Genre: " + this.genre);
    console.log(" - Weight: " + this.weight);
    console.log(" - Height: " + this.height);
    console.log(" - Hair color: " + this.hairColor);
    console.log(" - Eye color: " + this.eyeColor);
    console.log(" - Race: " + this.race);
    console.log(" - Is retired?: " + this.isRetired);
    console.log(" - Nationality: " + this.nationality);
    console.log(" - Oscars Number: " + this.oscarsNumber);
    console.log(" - Profession: " + this.profession);
    console.log("****************************");
  }
  
}
class Movie {
  constructor(title, releaseYear, nationality, genre, photo, id) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nationality = nationality;
    this.genre = genre;
    this.photo = photo;
    this.id = id;
  }

  mostrarDatosPelicula() {
    console.log(this.photo);
    console.log("Pelicula: ");
    console.log("Title: " + this.title);
    console.log("Release year: " + this.releaseYear);
    console.log("Nacionality: " + this.nationality);
    console.log("Genre: " + this.genre);
    console.log("*******************************");
  }
  getInfoHtml() {
    return `
        <div id= "cardMovie" class="card" style="width: 15rem">
          <img src="${this.photo}" class="card-img-top width" alt="" />
          <div class="card-body">
            <h6 class="card-title" style = "text-align: center;">${this.title}</h6>
            <button
            type="button"
            class="btn btn-primary row3"
            data-toggle="modal"
            data-target="#modal${this.id}"
            >
            Info Peli
            </button>
          </div>
        </div>
  <div
    class="modal fade"
    id="modal${this.id}"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
         <h5 class="modal-title">${this.title}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Info de la pelicula:</p>
          <ul>
            <li>Año de estreno: ${this.releaseYear}</li>
            <li>Nacionalidad: ${this.nationality}</li>
            <li>Genero: ${this.genre}</li>
          </ul>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> `
  }

}

class Imdb {
  constructor(pelis) {
    this.peliculas = pelis;
  }
  mostrarIMBD() {
    for (let i = 0; i < this.peliculas.length; i++) {
      this.peliculas[i].mostrarDatosPeliculas();
    }
  }
  getInfoHtml() {
    let resultado = "";
    for (let i = 0; i < this.peliculas.length; i++) {
      resultado += this.peliculas[i].getInfoHtml();
    }
    return resultado;
  }

  addMovie() {
    let movie = new Movie(
      $("#nameMovie").val(),
      $("#releaseYear").val(),
      $("#nationality").val(),
      $("#genre").val(),
      $("#img").val(),
      this.calculateId()
    );
    this.peliculas.push(movie);
  }

  calculateId(){
   return this.peliculas.length
  }
}

let movie1 = new Movie(
  "Cadena Perpetua",
  1994,
  "EEUU",
  "drama",
  "img./cadenaPerpetua.jpg",
  0
 
);
let movie2 = new Movie(
  "Vengadores: infinity war",
  2018,
  "EEUU",
  "accion",
  "img./vengadores.jpg",
  1
);

let movie3 = new Movie("Raya y el ultimo dragon",2021,"EEUU", "Animacion","img./rayaDragon.jpg",2)
let movie4 = new Movie("The gentlemen",2021,"UK", "Action","img./theGentlemen.jpg",3)


let imdb = new Imdb([movie1, movie2,movie3,movie4]);

//Incluir peliculas:
$(document).ready(function () {
  $("#pelicula").click(function () {
    $("#verPelis").html(imdb.getInfoHtml());
  });
});



//Formulario

$(document).ready(function () {
  $("#crearPeli").click(function () {
    imdb.addMovie();

    $("#nameMovie").val(" ");
    $("#releaseYear").val(" ");
    $("#nationality").val(" ");
    $("#genre").val(" ");
    $("#img").val(" ");
  });
});
