import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { IRating } from '../models/rating.model';

@Injectable()

export class RatingService {

  constructor(private http: Http) {
  }

  // Received filtered array with array.prototype.filter method. I'm gonna filter movie_id attribute with id path of movies.
  getMovieRating(id: number): Observable<IRating[]> {
    return this.http.get("https://movie-ranking.herokuapp.com/movies/" + id.toString() + "/ratings")
      .map((res: Response) => res.json())
      .map(rating => rating.rating)
      .catch(this.handleError);
  }

  //used my filtered movie array, and used the star (1-5) parameter.
  //used filter method to get all 1,2,3,4,5 values. Have problems to make nice method for all values at once with observable.
  getStar(id: number, star: number): Observable<String> {
    return this.http.get("https://movie-ranking.herokuapp.com/movies/" + id.toString() + "/ratings")
      .map((res: Response) => res.json())
      .map(rating => rating.filter((rating) => rating.rating == star).length.toString())
      .catch(this.handleError);
  }

  //Saving input using id to url and formValues. Cool.
  saveRating(id: number, formValues): Observable<IRating> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //this Headers and RequestOptions, need to check how it works. This time i didn't declare next id, movie.id etc. It's some kind of awesome magic.
    return this.http.post("https://movie-ranking.herokuapp.com/movies/" + id + "/ratings", JSON.stringify(formValues), options)
      .map((res: Response) => { return res.json() })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
