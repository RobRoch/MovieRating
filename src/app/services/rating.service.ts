import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
    
  // get averageRating from movie ratings. Used reduce method and managed to use shortened syntax for object argument.
  //  getAverageRating(id:number):Observable<String> {
  //    return this.http.get("https://movie-ranking.herokuapp.com/movies/"+id.toString()+"/ratings")
  //                    .map((res:Response) => res.json())
  //                    .reduce(rating => rating.rating)
  //  }

   //Saving input using id to url and formValues. Cool.
   saveRating(id:number, formValues):Observable<IRating> {
    let headers = new Headers({ 'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});

  
    return this.http.post("https://movie-ranking.herokuapp.com/movies/" + id + "/ratings", JSON.stringify(formValues), options)
                    .map((res:Response) => { return res.json() });
  }
}

//Hardcoded Rating with model style.
// const RATING:IRating[] = [
//   {
//     "id": 274,
//     "movie_id": 12,
//     "rating": 5
//   },
//   {
//     "id": 280,
//     "movie_id": 12,
//     "rating": 1
//   },
//   {
//     "id": 282,
//     "movie_id": 12,
//     "rating": 5
//   },
//   {
//     "id": 284,
//     "movie_id": 11,
//     "rating": 1
//   },
//   {
//     "id": 285,
//     "movie_id": 12,
//     "rating": 1
//   },
//   {
//     "id": 286,
//     "movie_id": 12,
//     "rating": 1
//   },
//   {
//     "id": 292,
//     "movie_id": 13,
//     "rating": 4
//   },
//   {
//     "id": 297,
//     "movie_id": 13,
//     "rating": 2
//   },
//   {
//     "id": 298,
//     "movie_id": 12,
//     "rating": 3
//   },
//     {
//     "id": 274,
//     "movie_id": 10,
//     "rating": 5
//   },
//   {
//     "id": 280,
//     "movie_id": 10,
//     "rating": 1
//   },
//   {
//     "id": 282,
//     "movie_id": 11,
//     "rating": 1
//   },
//   {
//     "id": 284,
//     "movie_id": 11,
//     "rating": 1
//   },
//   {
//     "id": 285,
//     "movie_id": 12,
//     "rating": 1
//   },
//   {
//     "id": 286,
//     "movie_id": 12,
//     "rating": 1
//   },
//   {
//     "id": 292,
//     "movie_id": 13,
//     "rating": 4
//   },
//   {
//     "id": 297,
//     "movie_id": 13,
//     "rating": 2
//   },
//   {
//     "id": 298,
//     "movie_id": 12,
//     "rating": 3
//   }
// ]
