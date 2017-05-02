import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { IRating } from '../models/rating.model';

@Injectable()

export class RatingService {

  //Making BehaviorSubject to store data.
  currentRating: Subject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor(private http: Http) {
  }

  //Getting movie rating using movie_id as parameter. Then subscribing and pushing data to my currentRating BehaviorSubject.
  getMovieRating(id:number) {
    this.http.get("https://movie-ranking.herokuapp.com/movies/" + id.toString() + "/ratings")
      .map((res: Response) => res.json())
      .catch(this.handleError)
      .subscribe(
        (rating: any) => { this.currentRating.next(rating); },
        () => console.log("Yay got all this movie rating downloaded!")
      );
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
