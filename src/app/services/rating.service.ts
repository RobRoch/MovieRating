import { Injectable, EventEmitter } from '@angular/core';
import { IRating } from '../models/rating.model';

@Injectable()

export class RatingService {
  //single rating class needs IRating build from rating.model.

  rankedRating:IRating
  constructor() {
   }

 // !!! I want to receive array or ratings in detail.component only when :id path -> movie_id
 // !!! Find out how to bind movie_id in filter function.
 // !!!
   getSumRating(id:number) {
     return RATING.filter(() => id == 12);
   }
}

//Hardcoded Rating with model style.
const RATING:IRating[] = [
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
