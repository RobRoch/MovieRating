import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IRating } from '../models/rating.model';
import 'rxjs';

@Injectable()

export class RatingService {
  

  constructor(private http:Http) {
   }

   // Received filtered array with array.prototype.filter method. I'm gonna filter movie_id attribute with id path of movies.
   getMovieRating(id:number):Observable<IRating[]> {
     return this.http.get("https://movie-ranking.herokuapp.com/movies/"+id.toString()+"/ratings")
                     .map((res:Response) => res.json());
   }

   //used my filtered movie array, and used the star (1-5) parameter.
   //called reduce method to count those objects with star == "rating".
   //could improve syntax to es6, but will leave it for now.

   getStar(id:number, star:number):Observable<String>{
      return this.http.get("https://movie-ranking.herokuapp.com/movies/"+id.toString()+"/ratings")
                      .map((res:Response) => res.json())
                      .map(rating => rating.filter((rating)=>rating.rating == star).length.toString())
                      
   }
        // return this.getMovieRating().reduce(
        // function(n, ratings){
        //   return n + +(ratings.rating == star);
        // },0).toString();

   //get averageRating from movie ratings. Used reduce method and managed to use shortened syntax for object argument.
  //  getAverageRating(rating:IRating[]):String {
  //    var sum = rating.reduce((a,b) =>{return a + b.rating},0);
  //    var total = rating.length;
  //    var avrg = (Math.round(sum*100/total)/100).toFixed(2);
  //    return avrg.toString();
  //  }

   //taking highest id from array. Math.max.apply(Math,array). And then i use map to only get id from whole rating.
  //  getHighestId(rating:IRating[]) {
  //    return Math.max.apply(Math,
  //       rating.map(function(attr){
  //          return attr.id}))
  //  }
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
