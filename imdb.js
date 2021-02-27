class Professional {

    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession,photo) {
        this.name = name
        this.age = age
        this.genre = genre
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
        this.photo = photo;
    }
    mostrarDatos() {
        console.log(" - Name: " + this.name)
        console.log(" - Age: " + this.age)
        console.log(" - Genre: " + this.genre)
        console.log(" - Weight: " + this.weight)
        console.log(" - Height: " + this.height)
        console.log(" - Hair color: " + this.hairColor)
        console.log(" - Eye color: " + this.eyeColor)
        console.log(" - Race: " + this.race)
        console.log(" - Is retired?: " + this.isRetired)
        console.log(" - Nationality: " + this.nationality)
        console.log(" - Oscars Number: " + this.oscarsNumber)
        console.log(" - Profession: " + this.profession)
        console.log("****************************")
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
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.photo = photo;

    }

     mostrarDatosPelicula() {
        console.log(this.photo)
        console.log("Pelicula: ")
        console.log("Title: " + this.title)
        console.log("Release year: " + this.releaseYear)
        console.log("Nacionality: " + this.nationality)
        console.log("Genre: " + this.genre)
        console.log("*******************************")
    }

}

 class Imdb {

    constructor(peliculas) {
        this.peliculas = [peliculas];
    }
    mostrarIMBD() {
        for (let i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarDatosPeliculas()
        }
    }

}


let imgVen = "img./vengadores.jpg"
let imgCadPerpetua = "img./cadenaPerpetua.jpg"

let movie1 = new Movie("Cadena Perpetua", 1994, "EEUU", "drama",imgCadPerpetua);
let movie2 = new Movie("Vengadores: infinity war", 2018, "EEUU", "accion", imgVen);

let imdb = new Imdb([movie1,movie2]) 



$(document).ready(function() {
    $("#pelicula").click(function() {
        $("#parrafo").append('<h2>Hey que pasa, esta puta mierda no sale</h2>')
    });    
});
