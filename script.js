"use strict"

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// home work 2


for(let i = 0; i < 2; i++) {
   let a = prompt('Один из последних просмотренных фильмов?', ''),
   b = prompt('На сколько оцените его?', '');

   if(a!= null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
   } else {
      i--;
   }

}

// let i = 0;
// while (i < 2) {
//    let a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = prompt('На сколько оцените его?', '');

//    if(a!= null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//    } else {
//       i--;
//    }

//    i++;
// }

console.log(personalMovieDB);

if(personalMovieDB.count < 10) {
   console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
   console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
   console.log("Вы киноман");
} else {
   console.log("Произошла ошибка");
}
