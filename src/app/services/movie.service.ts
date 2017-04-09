import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import { IMovie } from '../models/movie.model';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies():Observable<IMovie[]> {
    let subject = new Subject<IMovie[]>()
    setTimeout(()=>{subject.next(MOVIES); subject.complete();},1000)
    return subject;
  }

  getMovie(id:number):IMovie {
    return MOVIES.find(movie => movie.id === id)
  }
}

const MOVIES:IMovie[] = [
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