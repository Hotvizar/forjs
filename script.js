"use strict"

const video = ["youtube", "vimeo", "rutube"],
      soc = ["vk", "ok", "fb"],
      all = [...video, ...soc];

console.log(all);  

/* let numberOfFilms; */

// function start() {
//    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
// }

// start();

/* const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}; */

// function rememberMyFilms() {
//    for(let i = 0; i < 2; i++) {
//       let a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
   
//       if(a!= null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//       } else {
//          i--;
//       }
//    }
// }

// rememberMyFilms();

// function detecPersonalLevel() {
//    if(personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов");
//    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//    } else if (personalMovieDB.count > 30) {
//       console.log("Вы киноман");
//    } else {
//       console.log("Произошла ошибка");
//    }
// }

// detecPersonalLevel();

/* function showMyDB() {
   if(personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}

function writeYourGenres() {
   for(let i = 1; i < 4; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   } 
   showMyDB();
}
**/
