export class Professional {
    private name: string
    private age: number
    private genre: string
    private weight: number
    private height: number
    private hairColor: string
    private eyeColor: string
    private race: string
    private isRetired: boolean
    private nationality: string
    private oscarsNumber: number
    private profession: string

    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
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
    }
    //Metodo mostrar datos de todos los atributos
    public mostrarDatos() {
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
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getHairColor(): string {
        return this.hairColor;
    }

    public setHairColor(hairColor: string): void {
        this.hairColor = hairColor;
    }

    public getEyeColor(): string {
        return this.eyeColor;
    }

    public setEyeColor(eyeColor: string): void {
        this.eyeColor = eyeColor;
    }

    public getRace(): string {
        return this.race;
    }

    public setRace(race: string): void {
        this.race = race;
    }

    public getIsRetired(): boolean {
        return this.isRetired;
    }

    public setIsRetired(isRetired: boolean): void {
        this.isRetired = isRetired;
    }

    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }

    public getOscarsNumber(): number {
        return this.oscarsNumber;
    }

    public setOscarsNumber(oscarsNumber: number): void {
        this.oscarsNumber = oscarsNumber;
    }

    public getProfession(): string {
        return this.profession;
    }

    public setProfession(profession: string): void {
        this.profession = profession;
    }

}
export class Movie {
    private title: string
    private releaseYear: number
    private actors: Professional[]
    private nationality: string
    private director: Professional
    private writer: Professional
    private languaje: string
    private plataform: string
    private isMCU: boolean
    private mainCharacterName: string
    private producer: Professional
    private distributor: Professional
    private genre: string
    private photo: 

    constructor(tittle: string, releaseYear: number, nationality: string, genre: string) {
        this.title = tittle
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre

    }

    //Metodos:
    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public setReleaseYear(releaseYear: number): void {
        this.releaseYear = releaseYear;
    }

    public getActors(): Professional[] {
        return this.actors;
    }

    public setActors(actors: Professional[]): void {
        this.actors = actors;
    }

    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }

    public getDirector(): Professional {
        return this.director;
    }

    public setDirector(director: Professional): void {
        this.director = director;
    }

    public getWriter(): Professional {
        return this.writer;
    }

    public setWriter(writer: Professional): void {
        this.writer = writer;
    }

    public getLanguaje(): string {
        return this.languaje;
    }

    public setLanguaje(languaje: string): void {
        this.languaje = languaje;
    }

    public getPlataform(): string {
        return this.plataform;
    }

    public setPlataform(plataform: string): void {
        this.plataform = plataform;
    }

    public isIsMCU(): boolean {
        return this.isMCU;
    }

    public setIsMCU(isMCU: boolean): void {
        this.isMCU = isMCU;
    }

    public getMainCharacterName(): string {
        return this.mainCharacterName;
    }

    public setMainCharacterName(mainCharacterName: string): void {
        this.mainCharacterName = mainCharacterName;
    }

    public getProducer(): Professional {
        return this.producer;
    }

    public setProducer(producer: Professional): void {
        this.producer = producer;
    }

    public getDistributor(): Professional {
        return this.distributor;
    }

    public setDistributor(distributor: Professional): void {
        this.distributor = distributor;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    public mostrarDatosPeliculas() {
        console.log("*******************************")
        console.log("Peliculas: ")
        console.log("Tittle: " + this.title)
        console.log("Release year: " + this.releaseYear)
        console.log("Actors: ")
        for (let i = 0; i < this.getActors().length; i++) {

            this.getActors()[i].mostrarDatos()

        }
        console.log("Nacionality: " + this.nationality)
        console.log("Director: ")
        this.director.mostrarDatos()
        console.log("Writer: ")
        this.writer.mostrarDatos()
        console.log("Language: " + this.languaje)
        console.log("Plataform: " + this.plataform)
        console.log("Is MCU?: " + this.isMCU)
        console.log("Main character name: " + this.mainCharacterName)
        console.log("Producer: ")
        this.producer.mostrarDatos()
        console.log("Distributor: ")
        this.distributor.mostrarDatos()
        console.log("Genre: " + this.genre)
        console.log("*******************************")
    }


}


export class Imdb {

    public peliculas: Movie[]

    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas
    }
    public mostrarIMBD() {
        for (let i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarDatosPeliculas()
        }
    }
    public escribirEnFicheroJSON(nombreFichero: string) {
        let imbd2 = JSON.stringify(this)
        fs.writeFileSync(nombreFichero, imbd2)
    }

    public obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        const fs = require('fs');
        let imdb = new Imdb([])
        fs.readFileSync(nombreFichero)
        imdb.peliculas = JSON.parse(fs.readFileSync(nombreFichero)).peliculas
        return imdb
    }

}

