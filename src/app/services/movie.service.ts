import { Injectable, EventEmitter } from '@angular/core';
import { IMovie } from '../models/movie.model';

@Injectable()
export class MovieService {

  constructor() { }

//getting all movies from hardcoded db (array of json)
  getMovies() {
    return MOVIES;
  }

//getting 1 movie json by id:, used Model IMovie for return type check.
//return first element in the array, 
//and my returned movie is first one that my called id: is same as movie.id attribute.
  getMovie(id: number): IMovie {
    return MOVIES.find(movie => movie.id === id)
  }

}

//Hardcoded movies
const MOVIES: IMovie[] = [
  {
    "id": 12,
    "title": "The Empire Strikes Back",
    "poster": "http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-2.jpg"
  },
  {
    "id": 13,
    "title": "Return of the Jedi",
    "poster": "http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-3.jpg"
  },
  {
    "id": 11,
    "title": "A New Hope",
    "poster": "http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-1.jpg"
  }
]