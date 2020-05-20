// below is an object constructor function
/*let movie = function(name, genre, hero, heroine) {

    this.name = name;
    this.genre = genre;
    this.hero = hero;
    this.heroine = heroine;
} */
// here we are building a complex object using simple objects step by step instead of using object constructor
let MovieDetails = function () {

    let name;
    let genre;
    let hero;
    let heroine;

    return {
        setName: function (name) {
            this.name = name;
            return this;
        },
        setGenre: function (genre) {
            this.genre = genre;
            return this;
        },
        setHero: function (hero) {
            this.hero = hero;
            return this;
        },
        setHeroine: function (heroine) {
            this.heroine = heroine;
            return this;
        }, 
        Movie: function () {
            return new Task(name, genre, hero, heroine);
        }
    };
};

let film = new MovieDetails().setName('pokiri').setGenre('action')
    .setHero('Mahesh babu').setHeroine('ileana');

console.log(film);

