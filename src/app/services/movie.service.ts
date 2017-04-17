import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
  private moviesUrl = "https://movie-ranking.herokuapp.com/movies/";

  constructor(private http: Http) { }

//getting all movies from http url. Need to map response which will keep pushing json to IMovie array.
//and i'll catch errors with handleError made at the bottom.
  getMovies():Observable<IMovie[]>{
    return this.http.get(this.moviesUrl)
                    .map((response:Response) => <IMovie[]>response.json())
                    .catch(this.handleError);
   // old code
   // return MOVIES;
  }

// getting 1 movie json by id:, used Model IMovie for return type check.
// return first element in the array, 
// and my returned movie is first one that my called id: is same as movie.id attribute.
  getMovie(id: number):IMovie {
    return MOVIES.find(movie => movie.id === id)
  }

//TODO SEARCH!!!
  searchMovies(str: string) {
    return MOVIES;
  }

  //simple error statusText when something wrong with my data streaming.
  private handleError(error:Response) {
    return Observable.throw(error.statusText);
  }

}

//Hardcoded movies (i'll comment them now)
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