import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IMovie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  //checking my movies to be array of IMovie[] model.
  movies:IMovie[];

  //calling private moviesService: MovieService in constructor 
  //it's assigning MovieService to this class property of movieService.
  //my methods gonna go look to this constructor and then constructor moves them to movie.service.ts to get themselves.
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  //onInit i wanna receive movies so i'm calling service with my method getMovies(). It's not streamed data at the moment.
  //assigning to this.movies array to use them in my html.
    console.log(this.movieService.getMovies()
                      .subscribe(movies => this.movies = movies));
    console.log(this.movies);
  }
    

}
