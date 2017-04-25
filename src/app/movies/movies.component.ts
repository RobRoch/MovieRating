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
  filteredMovies:IMovie[];
  sortedMovies:IMovie[];
  //calling private moviesService: MovieService in constructor 
  //it's assigning MovieService to this class property of movieService.
  //my methods gonna go look to this constructor and then constructor moves them to movie.service.ts to get themselves.
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  //onInit i wanna receive movies so i'm calling service with my method getMovies().
  //taking this.movies then filtering them and assigning to movies filtered values.
    this.movieService.getMovies().subscribe(movies => this.movies = this.filteredMovies = movies);    
  }
  
  searchMovies(searchTerm) {
    searchTerm.toLowerCase();
    
    console.log(searchTerm);
    this.filteredMovies = this.movies.filter(movies => movies.title.toLowerCase().includes(searchTerm))
  }
  
  //Trying not to use pipe, sorting and searching shouldn't be done by pipe - Angular Team.
  //Pushing data to new sortedMovies and checking if it's sorted already.
  //Sort ascending, and when it's done, it reverses array on next click and so on. (normal -> asc -> desc -> asc -> desc etc..)
  sortBy() {
    if (this.sortedMovies != this.movies) {
    this.sortedMovies = this.movies.sort(function(m1: IMovie, m2:IMovie) {
      var movieA = m1.title.toLowerCase(), movieB = m2.title.toLowerCase();
      if (movieA < movieB)
        return -1 
      else if (movieA > movieB)
        return 1 
      else 0
    })}
    else {
      this.sortedMovies.reverse();
    }
  }
}
