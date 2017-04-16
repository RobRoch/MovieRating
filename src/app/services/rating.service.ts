import { Injectable, EventEmitter } from '@angular/core';
import { IRating } from '../models/rating.model';

@Injectable()

export class RatingService {
  //single rating class needs IRating build from rating.model.


  constructor() {
   }

   // Received filtered array with array.prototype.filter method. I'm gonna filter movie_id attribute with id path of movies.
   getMovieRating(id:number) {
     return RATING.filter((rating) => id == rating.movie_id);
   }

   //used my filtered movie array, and used the star (1-5) parameter.
   //called reduce method to count those objects with star == "rating".
   //could improve syntax to es6, but will leave it for now.
   getStar(rating:IRating[], star:number):number{
     var count = rating.reduce(
      function(n, ratings){
        return n + +(ratings.rating == star);
      },0);
      return count;
   }
}

//Hardcoded Rating with model style.
const RATING:IRating[] = [
  {
    "id": 274,
    "movie_id": 12,
    "rating": 5
  },
  {
    "id": 280,
    "movie_id": 12,
    "rating": 1
  },
  {
    "id": 282,
    "movie_id": 12,
    "rating": 5
  },
  {
    "id": 284,
    "movie_id": 11,
    "rating": 1
  },
  {
    "id": 285,
    "movie_id": 12,
    "rating": 1
  },
  {
    "id": 286,
    "movie_id": 12,
    "rating": 1
  },
  {
    "id": 292,
    "movie_id": 13,
    "rating": 4
  },
  {
    "id": 297,
    "movie_id": 13,
    "rating": 2
  },
  {
    "id": 298,
    "movie_id": 12,
    "rating": 3
  },
    {
    "id": 274,
    "movie_id": 10,
    "rating": 5
  },
  {
    "id": 280,
    "movie_id": 10,
    "rating": 1
  },
  {
    "id": 282,
    "movie_id": 11,
    "rating": 1
  },
  {
    "id": 284,
    "movie_id": 11,
    "rating": 1
  },
  {
    "id": 285,
    "movie_id": 12,
    "rating": 1
  },
  {
    "id": 286,
    "movie_id": 12,
    "rating": 1
  },
  {
    "id": 292,
    "movie_id": 13,
    "rating": 4
  },
  {
    "id": 297,
    "movie_id": 13,
    "rating": 2
  },
  {
    "id": 298,
    "movie_id": 12,
    "rating": 3
  }
]
