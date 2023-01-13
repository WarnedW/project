/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/

'use strict';

let numberOfFilms;

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function  start () {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели посмотрели?');
   
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели посмотрели?');
   }

   
}

function rememberMyFilms () {
   for (let i = 0; i < 2; i++){
      let lastFilm = prompt('Один из последних просмотренных фильмов?'),
         scoreFilm = prompt('На сколько оцените его?');
   
      if (lastFilm == null || scoreFilm == null || lastFilm == 0 || scoreFilm == 0){
         lastFilm = prompt('Один из последних просмотренных фильмов?');
         scoreFilm = prompt('На сколько оцените его?');
         i--;
         console.log('Error');
      }
      console.log('Done');
      personalMovieDB.movies[lastFilm] = scoreFilm;
   }
}

function detectPersonalLevel () {
   if (personalMovieDB.count > 30){
      console.log('Вы киноман');
   } else if (10 < personalMovieDB.count < 30){
      console.log('Вы классический зритель');
   } else {
      console.log('Просмотрено довольно мало фильмов');
   }
}

function showMyDB (hidden) {
   if (!hidden){
      console.log(personalMovieDB);
   }
}

function writeYourGenres () {
   for(let i = 1; i < 4; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

start();
// rememberMyFilms();
// detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();