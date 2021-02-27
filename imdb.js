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
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getGenre() {
    return this.genre;
  }

  setGenre(genre) {
    this.genre = genre;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  getHairColor() {
    return this.hairColor;
  }

  setHairColor(hairColor) {
    this.hairColor = hairColor;
  }

  getEyeColor() {
    return this.eyeColor;
  }

  setEyeColor(eyeColor) {
    this.eyeColor = eyeColor;
  }

  getRace() {
    return this.race;
  }

  setRace(race) {
    this.race = race;
  }

  getIsRetired() {
    return this.isRetired;
  }

  setIsRetired(isRetired) {
    this.isRetired = isRetired;
  }

  getNationality() {
    return this.nationality;
  }

  setNationality(nationality) {
    this.nationality = nationality;
  }

  getOscarsNumber() {
    return this.oscarsNumber;
  }

  setOscarsNumber(oscarsNumber) {
    this.oscarsNumber = oscarsNumber;
  }

  getProfession() {
    return this.profession;
  }

  setProfession(profession) {
    this.profession = profession;
  }
}
class Movie {
  constructor(title, releaseYear, nationality, genre, photo) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nationality = nationality;
    this.genre = genre;
    this.photo = photo;
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
    return `<div class="card" style="width: 17rem;">
    <img  src=${this.photo} class="card-img-top width" alt="">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <div>
        <ul>
          <li>${this.releaseYear}</li>
          <li>${this.nationality}</li>
          <li>${this.genre}</li>
        </ul>
      </div>
    </div>
  </div>`;
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
      $("#img").val()
    );
    this.peliculas.push(movie);
  }
}

let movie1 = new Movie(
  "Cadena Perpetua",
  1994,
  "EEUU",
  "drama",
  "img./cadenaPerpetua.jpg"
);
let movie2 = new Movie(
  "Vengadores: infinity war",
  2018,
  "EEUU",
  "accion",
  "img./vengadores.jpg"
);

let imdb = new Imdb([movie1, movie2]);

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
    $("#releaseYear").val(" "),
    $("#nationality").val(" "),
    $("#genre").val(" "),
    $("#img").val(" ")
  });
});
